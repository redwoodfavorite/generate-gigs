export default {
     "gig_save_type": "gig",
     "gig_due_type": "ASAP",
     "proto_gig_id": "PROTOGIG2352609a8798b8b9aea82cc55f9f88dc",
     // "proto_gig_id": null,
     "gig_description": "JOSEPH SCRIPT GENERATED",
     "gig_drid": "ios",
     "gig_street_cred_required": "0",
     "gig_street_cred_bonus": "0",
     "gig_create_timestamp": 1513303673,
     "gig_modified_timestamp": Math.floor(Date.now() / 1000),
     "gig_expire_timestamp": 2525745789,
     "gig_structured_data":{
        "skills_restrictions":false
     },
     "gig_extended_instructions": "[u]Gig Description:[/u]\nFor this gig you will be going to the store address that is listed, locating several products on the shelf in various sections of the store, and capturing clear close-up photos of each product. These photos will be displayed on an e-commerce website so please take them as professionally as possible.\n\n[u]Gig Details[/u] &ndash; in order to be paid, you will need to complete the following:[ul][li]take a clear and well-framed photo of the storefront[/li][li]if you are approached by a store employee at any time during this audit, please present this [url=https://i.imgur.com/Ehef4jv.png]LETTER OF AUTHORIZATION [/url][/li][li]locate the following items in the store and take clear and well-framed CLOSE-UP photos of each product capturing the packaging within the ENTIRE frame of the photo. Photos that cut-off any portion of the product will be rejected. All text, branding, and logo on the packaging should be CLEAR and VISIBLE.[/li][/ul]\n[color=#000000]PLEASE NOTE: [/color]As a reminder, please always be professional when visiting your assigned location. [color=#323333]This gig must be completed during business hours. [/color]\n\n[color=#000000]THERE WILL BE NO EXTENSIONS FOR THIS GIG. NO EXCEPTIONS[/color] Click <a href=\"https://gigwalk.zendesk.com/hc/en-us/sections/200597720\"> this link </a>for Gigwalk FAQs",
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

export const initialQuestions = [{
    "type":"photo",
    "state":"open",
    "sequence":1,
    "question_id":"",
    "question":"Please take a clear and well-framed photo of the storefront.",
    "propositions":""
 },
 {
    "type":"multiple_choice",
    "state":"open",
    "sequence":2,
    "question_id":"",
    "question":"[DEVICE REQUIREMENT]: This gig requires you to take photos using a device similar to an iPhone 6, Galaxy 6 OR better. Please confirm that you are using a similar device. ",
    "propositions":[
       "I am using a similar device or better",
       "I have an older model phone and will remove myself from this gig"
    ]
 },
 {
    "type":"check",
    "state":"open",
    "sequence":3,
    "question_id":"",
    "question":"[LETTER OF AUTHORIZATION]: If you are approached by a store employee at any time during this audit, please present this <a href=\"https://i.imgur.com/DcJjlkD.png\"> LETTER OF AUTHORIZATION </a>.",
    "propositions":""
 },
 {
    "type":"check",
    "state":"open",
    "sequence":4,
    "question_id":"",
    "question":"[PRODUCT PHOTO REQUIREMENTS]: For the following products listed below, please take up to 5 clear and well-framed CLOSE-UP photos. All photos must meet the following requirements: (1) Must take photos using a device similar to an iPhone 6, Galaxy 6 or better,  (2) photo must capture the FRONT packaging within the ENTIRE frame of the photo, (3) avoid any glare as much as possible, (4) ALL text, branding, and logo on the packaging should be CLEAR and VISIBLE. Please see <a href=\"https://i.imgur.com/89dnE5R.png\"> EXAMPLE PHOTO </a>. ***Any photos that fail to meet the above requirements will be rejected. ",
    "propositions":""
 },
 {
    "type":"check",
    "state":"open",
    "sequence":5,
    "question_id":"",
    "question":"[UPC INSTRUCTIONS]: Please note, we have provided the first 10 digits of the UPC for each product below, however, the product on the shelf may actually contain 12 digits. If the FIRST 10 DIGITS match, along with the product description, please proceed with the task. ***If you cannot locate a product, please approach a store associate to assist you. ",
    "propositions":""
 }]

export const finalQuestions = [
  {
    "type":"free_text",
    "state":"open",
    "sequence":46,
    "question_id":"",
    "question":"If a store associate helped you locate any of the items, please indicate their name(s) below:",
    "propositions":""
  },
  {
    "type":"free_text",
    "state":"open",
    "sequence":46,
    "question_id":"",
    "question":"Please enter any additional comments here that you think will be helpful to the client.",
    "propositions":""
}]
