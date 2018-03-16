import axios from 'axios'
import gigToLaunch, { initialQuestions, finalQuestions } from './gigTemplate'
import editGig from './editGig'
import Baby from 'babyparse'
import fs from 'fs'
import getLocationData from './getLocationData'
import csv from 'fast-csv'
import stream from 'stream'

//
// This is the JSON containing all the gig IDs we have created so far
// they are entered into an array with their index in the array being the rows
// of the excel sheet they correspond to
//
// [nil, "SOME_BUNDLE_HASH_1", "SOME_BUNDLE_HASH_2"]
//
// Here "SOME_BUNDLE_HASH_1" is the id of the bundle we created for
// the 2nd row (index 1) of the csv
//
const gigIDList = JSON.parse(fs.readFileSync('./launchedGigsIDs.json'))

//
// Change the START_INDEX here to change what row of the csv we
// want to start generating gigs from.  Change END_INDEX to change
// on which row we want to stop generating.  Will not create a gig
// for the row at this index.
//
// START_INDEX=1, END_INDEX=2 will create only the gig on row 1
//
// NOTE: The very first row of the csv is generally a header so we'll
// most likely want to start at index 1
//
const START_INDEX = 1;
const END_INDEX = 2;
var allGigs = Baby.parseFiles('./firstbacth0212.csv');
allGigs = allGigs.data.slice(START_INDEX, END_INDEX);

//
// This variable is simply index of the gig relative to this batch
// It starts at 0 no matter the START_INDEX
// It is used to set the correct timeout
//
var j = 0

Promise.all(
    //
    // rows below is the wrong term as it really represents just
    // one row in the csv.
    //
    Object.values(allGigs).map((rows) => {
        const [
            blah,
            storeName,
            storeId,
            storeAddress,
            storeCity,
            storeState,
            storeZip,
            upc,
            productName,
            productCategory,
            storeCounts,
            upcCounts,
            bundleNumber,
            bundleName
        ] = rows

        //
        // Format address to send to google maps API
        //
        const address = `${storeAddress.trim()}, ${storeCity.trim()}, ${storeState.trim()}`
        return new Promise((resolve, rej) => {

            //
            // K here is the saved reference to the index of this row (relative to this batch!)
            //
            let k = j
            setTimeout(() => {
                //
                // This fuction takes the address and returns a list of locations
                // from Google maps api that are formatted in a way so they can
                // be added to the gig JSON
                //
                getLocationData([address])
                    .then((locations) => {

                        //
                        // Very rarely the location of the gig is not found by Google Maps
                        // and we have to abort creating this gig.  Watch for this log
                        // in the output to know what gigs could not be created.
                        //
                        if (!locations) {
                          console.log(`No location found for address: ${address} for bundle ${START_INDEX + k}`)
                          return Promise.resolve()
                        }

                        //
                        // Generate questions for this gig
                        // NOTE: uses the template file for initial and final questions
                        //
                        const gig_survey_content = [
                          ...initialQuestions,
                          ...(formatQuestions(productName, upc, productCategory)),
                          ...finalQuestions,
                        ]

                        //
                        // Go thru the gig questions and set their sequence property
                        // according to their position in the array
                        //
                        var i = 1
                        gig_survey_content.forEach(question => question.sequence = i++)

                        return axios({
                          method: 'post',
                          //
                          // For request debugging with Charles:
                          //
                          // proxy: {
                          //   host: '127.0.0.1',
                          //   port: 8888
                          // },
                          //
                          url: 'http://api.gigwalk.com/c/v1/gig/create',
                          //
                          // OR use the q.a. instance url
                          //
                          // url: 'http://50.18.117.61/c/v1/gig/create',
                          //
                          headers: {
                            Authorization: `Basic ${new Buffer('photolaunch@albertsons.com:gigwalk123').toString('base64')}`
                            //
                            // OR use the q.a. instance account for testing
                            //
                            // Authorization: `Basic ${new Buffer(`kris@gigwalk.com:${/* QA INSTANCE MASTER PWD */}`).toString('base64')}`
                          },

                          //
                          // Payload of the gig
                          //
                          data: {
                            //
                            // Add our template JSON first
                            //
                            ...gigToLaunch,

                            //
                            // On top of our template we override
                            // the properties we want to change
                            ...({
                                // When the gig was last modified (now!)
                                gig_modified_timestamp: Math.floor(Date.now() / 1000),

                                // Add the location JSON
                                gig_locations: locations,

                                // This is where you add the title of the gig you are generating
                                gig_description: `Product Photography Gig ${START_INDEX + k - 1}`,

                                // IMPORTANT: CHANGE THIS DATE to intended end date of the gig!
                                gig_end_datetime: '2018-3-12 23:59',

                                // This is where you add the title of the gig you are generating
                                proto_gig_id: null,

                                // Add all the question JSON
                                gig_survey_content
                            })
                          }
                        })
                        .then((res) => {
                          console.log('SUCCESSFULLY launched gig!', res.data.bundle_id)

                          //
                          // Add the bundle ID to the gig id list from our json file and then
                          // IMMEDIATELY write to the file and update the JSON.  This is
                          // important so that a failed request doesn't cause us to lose all of
                          // our gig IDs
                          //
                          gigIDList[START_INDEX + k] = res.data.bundle_id
                          fs.writeFileSync('./launchedGigsIDs.json', JSON.stringify(gigIDList))

                          //
                          // NOTE: this returns the bundle id
                          //
                          resolve(res.data.bundle_id)
                        })
                        .catch((err) => {
                          console.log('ERROR launching gig', err.message)
                        })
                    })
            }, (j++) * 1500)
        })
    })
)
.then((gigIDs) => {
    //
    // Here we have the list of created bundle IDs in the order
    // they were created
    //
    console.log(`DONE: Created ${gigIDs.length} gigs ✔️`)
})

//
// The whole fucking thing broke
//
.catch(e => {
    console.log('oh shit', e)
})

//
// This just uses a few variables we get from the rows and
// returns an object that is correctly formatted.  It returns
// an array so you could add multiple questions here
//
// NOTE: If you want to change the question DO IT HERE!!
//
const formatQuestions = (productName, upc, productCategory, i) => ([
    {
        "type": "check",
        "state": "open",
        //
        // The "sequence" property is missing here but is added later
        // after all the questions are added to the JSON
        //
        "question": `Go to the ${productCategory} aisle and find the ${productName} product with UPC number ${upc}.`,
        "propositions": ""
    }
])
