import { initialQuestions, finalQuestions } from './gigTemplate'
import getLocationData from './getLocationData'
import editGig from './editGig'
import csv from 'fast-csv'
import Baby from 'babyparse'
import fs from 'fs'

const gigData = Baby.parseFiles('./final_df7.csv').data.slice(1, 197)
const gigIDList = JSON.parse(fs.readFileSync('./gig_ids.json'))
const bundled = gigData.reduce((acc, row) => {
  if (acc[row[12]]) acc[row[12]].push(row)
  else acc[row[12]] = [row]
  return acc;
}, [])

Promise.all(
    bundled.map(rows => {
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
      ] = rows[0]
      var i = 1

      return getLocationData([storeAddress])
          .then((locations) => {
              const gig_survey_content = [
                ...initialQuestions,
                ...rows.reduce((acc, row) => [...acc, ...formatQuestions(row[8], row[7], row[9])], []),
                ...finalQuestions,
              ]

              gig_survey_content.forEach(question => question.sequence = i++)

              return editGig({
                  gig_modified_timestamp: Math.floor(Date.now() / 1000),
                  gig_locations: locations,
                  gig_description: `Photo Food Audit - ${bundleName}`,
                  gig_end_datetime: '2017-12-31 23:59',
                  proto_gig_id: gigIDList[bundleNumber] || null,
                  gig_survey_content
              })
          })
          .then(({ successFlag, message }) => {
              return gigIDList[bundleNumber] = message
          })
    })
)
.then((gigIDs) => {
    fs.writeFileSync('./gig_ids.json', JSON.stringify(gigIDList))
    console.log(`DONE: Created ${gigIDs.length} gigs ✔️`.green)
})
.catch(e => {
    console.log('oh shit'.red, e)
})

const formatQuestions = (productName, upc, productCategory, i) => ([
    {
       type: 'photo',
       state: 'open',
       sequence: 0,
       question: `Please locate the ${productName} (UPC: ${upc}) in the ${productCategory} aisle and take up to 5 clear and well-framed CLOSE-UP photos.`,
       propositions: ''
    }, {
       type: 'photo',
       state: 'open',
       sequence: 0,
       question_id: '',
       question: 'Please take a clear well framed photo of the UPC for the above product. Please see <a href=\"https://i.imgur.com/a6lAVqb.jpg\"> UPC EXAMPLE PHOTO </a>.',
       propositions: ''
    }
])



//
// .then((locations) => {
//     editGig({
//         gig_modified_timestamp: Math.floor(Date.now() / 1000),
//         gig_locations: locations,
//         // gig_description: 'HELLO',
//         gig_end_datetime: '2017-12-25 23:59'
//     })
    // .then(gigs => {
    //
    // })
// })
// .catch((error) => {
//   console.log('ERROR: ', error)
// })

// from web
// {
//     "street_number": {
//         "short_name": "143",
//         "long_name": "143"
//     },
//     "route": {
//         "short_name": "Turk St",
//         "long_name": "Turk Street"
//     },
//     "neighborhood": {
//         "short_name": "Tenderloin",
//         "long_name": "Tenderloin"
//     },
//     "locality": {
//         "short_name": "SF",
//         "long_name": "San Francisco"
//     },
//     "administrative_area_level_2": {
//         "short_name": "San Francisco County",
//         "long_name": "San Francisco County"
//     },
//     "administrative_area_level_1": {
//         "short_name": "CA",
//         "long_name": "California"
//     },
//     "country": {
//         "short_name": "US",
//         "long_name": "United States"
//     },
//     "postal_code": {
//         "short_name": "94102",
//         "long_name": "94102"
//     },
//     "postal_code_suffix": {
//         "short_name": "3914",
//         "long_name": "3914"
//     },
//     "specificity": "street_address",
//     "lat": 37.7828825,
//     "long": -122.41142869999999,
//     "formatted": "143 Turk St, San Francisco, CA 94102, USA"
// }
//
// // from script
//
// {
//   street_number: {
//     long_name: '143',
//     short_name: '143'
//   },
//     route: {
//         long_name: 'Turk Street',
//         short_name: 'Turk St'
//       },
//     neighborhood: {
//         long_name: 'Tenderloin',
//         short_name: 'Tenderloin'
//       },
//     locality: {
//         long_name: 'San Francisco',
//         short_name: 'SF'
//       },
//     administrative_area_level_2:
//      {
//         long_name: 'San Francisco County',
//        short_name: 'San Francisco County'
//      },
//     administrative_area_level_1: {
//         long_name: 'California',
//         short_name: 'CA'
//       },
//     country: {
//         long_name: 'United States',
//         short_name: 'US'
//       },
//     postal_code: {
//         long_name: '94102',
//         short_name: '94102'
//       },
//     postal_code_suffix: {
//         long_name: '3914',
//         short_name: '3914'
//       },
//     formatted_address: '143 Turk St, San Francisco, CA 94102, USA',
//     specificity: 'street_address'
//   }
