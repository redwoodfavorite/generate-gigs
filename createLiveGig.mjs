import axios from 'axios'
import gigToLaunch, { initialQuestions, finalQuestions } from './liveGigTemplate'
import editGig from './editGig'
import Baby from 'babyparse'
import fs from 'fs'
import getLocationData from './getLocationData'
import csv from 'fast-csv'
import stream from 'stream'

const gigIDList = JSON.parse(fs.readFileSync('./launchedGigsIDs.json'))

var csvStream = csv
    .parse()
    .on("data", function(data){
         console.log(data);
    })
    .on("end", function(){
         console.log("done");
    });

stream.pipe(csvStream);

// const START_INDEX = 1;
// var allGigs = Baby.parseFiles('./firstbacth0212.csv');
// // allGigs = allGigs.data.slice(21, 40)
// // allGigs = allGigs.data.slice(START_INDEX, 101); // at 40, 101, 200, 300, 400, 500, 600, 700, 701
// allGigs = allGigs.data.slice(START_INDEX, 2);
//
// var j = 0
// Promise.all(
//     Object.values(allGigs).map((rows) => {
//         const [
//             blah,
//             storeName,
//             storeId,
//             storeAddress,
//             storeCity,
//             storeState,
//             storeZip,
//             upc,
//             productName,
//             productCategory,
//             storeCounts,
//             upcCounts,
//             bundleNumber,
//             bundleName
//         ] = rows
//
//         var i = 1
//         const address = `${storeAddress.trim()}, ${storeCity.trim()}, ${storeState.trim()}`
//         return new Promise((resolve, rej) => {
//             let k = j
//             setTimeout(() => {
//                 getLocationData([address])
//                     .then((locations) => {
//                         if (!locations) {
//                           console.log(`No location found for address: ${address} for bundle ${k}`)
//                           return Promise.resolve()
//                         }
//                         const gig_survey_content = [
//                           ...initialQuestions,
//                           ...(formatQuestions(productName, upc, productCategory)),
//                           ...finalQuestions,
//                         ]
//
//                         gig_survey_content.forEach(question => question.sequence = i++)
//
//                         return axios({
//                           method: 'post',
//                           // proxy: {
//                           //   host: '127.0.0.1',
//                           //   port: 8888
//                           // },
//                           url: 'http://api.gigwalk.com/c/v1/gig/create',
//                           headers: {
//                             // Authorization: `Basic ${new Buffer('kris@gigwalk.com:core_masterf6AL2q3qF=U#rZHx').toString('base64')}`
//                             Authorization: `Basic ${new Buffer('photolaunch@albertsons.com:gigwalk123').toString('base64')}`
//                           },
//                           data: {
//                             ...gigToLaunch,
//                             ...({
//                                 gig_modified_timestamp: Math.floor(Date.now() / 1000),
//                                 gig_locations: locations,
//                                 gig_description: `Product Photography Gig ${START_INDEX + k - 1}`,
//                                 // gig_description: `JO TEST 22`,
//                                 gig_end_datetime: '2018-3-12 23:59',
//                                 proto_gig_id: null,
//                                 gig_survey_content
//                             })
//                           }
//                         })
//                         .then((res) => {
//                           console.log('SUCCESSFULLY launched gig!', res.data.bundle_id)
//                           gigIDList[START_INDEX + k] = res.data.bundle_id
//                           fs.writeFileSync('./launchedGigsIDs.json', JSON.stringify(gigIDList))
//                           resolve(res.data.bundle_id)
//                         })
//                         .catch((err) => {
//                           console.log('ERROR launching gig', err.message)
//                         })
//                     })
//             }, (j++) * 1500)
//         })
//     })
// )
// .then((gigIDs) => {
//     console.log(`DONE: Created ${gigIDs.length} gigs ✔️`)
// })
// .catch(e => {
//     console.log('oh shit', e)
// })
//
// const formatQuestions = (productName, upc, productCategory, i) => ([
//     {
//         "type": "check",
//         "state": "open",
//         "sequence": 3,
//         "question": `Go to the ${productCategory} aisle and find the ${productName} product with UPC number ${upc}.`,
//         "propositions": ""
//     }
// ])
