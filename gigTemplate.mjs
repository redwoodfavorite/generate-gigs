export default {
     "gig_save_type": "gig",
     "gig_due_type": "ASAP",
    //  "proto_gig_id": "PROTOGIG2352609a8798b8b9aea82cc55f9f88dc",
     "proto_gig_id": null,
     "gig_description": "JOSEPH SCRIPT GENERATED",
     "gig_drid": "ios",
     "gig_street_cred_required": "0",
     "gig_street_cred_bonus": "0",
     "gig_create_timestamp": 1513303673,
     "gig_modified_timestamp": Math.floor(Date.now() / 1000),
     "gig_expire_timestamp": 2525745789,
     "gig_structured_data": {
        "skills_restrictions":false
     },
     "gig_extended_instructions": "Sriram Test project",
     "gig_red_flagged": "0",
     "gig_house_based": "0",
     "gig_category":false,
     "gig_featured": "0",
     "gig_pay": "10",
     "gig_duration": "900",
     "gig_privacy_state": "public",
     "gig_due_on": "0",
     "gig_salesforce_id": "",
     "gig_due_by":1513843140,
     "gig_has_media": "1",
     "gig_has_notepad": "0",
     "gig_has_survey": "1",
     "gig_survey_content": [],
     "gig_notepad_content":false,
     "gig_survey_url":false,
     "gig_num_gigwalkers":1,
     "gig_auto_select_gigwalkers":true,
     "gig_has_locations": "1",
     "gig_locations":[
        {
           "street_number":{
              "short_name": "3110",
              "long_name": "3110"
           },
           "route":{
              "short_name": "Balfour Rd",
              "long_name": "Balfour Road"
           },
           "locality":{
              "short_name": "Brentwood",
              "long_name": "Brentwood"
           },
           "administrative_area_level_2":{
              "short_name": "Contra Costa County",
              "long_name": "Contra Costa County"
           },
           "administrative_area_level_1":{
              "short_name": "CA",
              "long_name": "California"
           },
           "country":{
              "short_name": "US",
              "long_name": "United States"
           },
           "postal_code":{
              "short_name": "94513",
              "long_name": "94513"
           },
           "postal_code_suffix":{
              "short_name": "5500",
              "long_name": "5500"
           },
           "specificity": "street_address",
           "lat":37.9240332,
           "long":-121.7219886,
           "formatted": "3110 Balfour Rd, Brentwood, CA 94513, USA",
           "metro_id": "stockton-ca"
        }
     ],
     "gig_saved_draft":1,
     "gig_group_id": "GROUP84d1e32bcf60ac48e40e7ab28851f145",
     "gig_auto_pilot":1,
     "gig_categories":[
        803
     ],
     "gig_service_fee": "",
     "gig_locations_to_complete": "0",
     "gig_gross_pay": "",
     "gig_start_timestamp":null,
     "gig_end_timestamp":1513843140,
     "gig_start_datetime":null,
     "gig_end_datetime": "2017-12-20 23:59",
     "bundle_start_timestamp":null,
     "bundle_end_timestamp":null,
     "bundle_tracker_id":null,
     "type": "saveAsDraft-AJAX"
}

export const initialQuestions = [
    {
        "type": "photo",
        "state": "open",
        "sequence": 1,
        "question": "Please take a clear and well framed photo of the storefront.",
        "propositions": ""
    },
    {
        "type": "check",
        "state": "open",
        "sequence": 2,
        "question": "Please present the letter of authorization <a href=\"https://imgur.com/DcJjlkD\"> here </a> if you are approached by a store associate during this Gig.",
        "propositions": ""
    }
]
export const finalQuestions =     [
  {
      "type": "photo",
      "state": "open",
      "sequence": 4,
      "question": "Before you take a picture of the product, please make sure to lay the product flat and make sure the entire product is visible and unobstructed. Please see the examples here <a href=\"https://imgur.com/a/HUNKk\"> here</a>. Take at least 5 clear and well framed photos of the front of the product.  Please keep in mind that these photos will be used to promote the product so please do your best to take a professional picture :)",
      "propositions": ""
  },
  {
        "type": "photo",
        "state": "open",
        "sequence": 5,
        "question": "Take a clear and well framed photo of the UPC. Please see example photo <a href=\"https://i.imgur.com/a6lAVqb.jpg\"> here</a>.",
        "propositions": ""
    },
    {
        "type": "photo",
        "state": "open",
        "sequence": 6,
        "question": "Take a photo of the price tag if the product is out of stock",
        "propositions": ""
    },
    {
        "type": "photo",
        "state": "open",
        "sequence": 7,
        "question": "Please ask a store associate for help if you cannot find the product. If you could not find the product, please take photo of the aisle.",
        "propositions": ""
    },
    {
        "type": "free_text",
        "state": "open",
        "sequence": 8,
        "question": "Please list store associates full name below if you did not find the product.",
        "propositions": ""
    },
    {
        "type": "free_text",
        "state": "open",
        "sequence": 9,
        "question": "Please include any additional comments that will be helpful to the client.",
        "propositions": ""
    }]
