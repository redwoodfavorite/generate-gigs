import axios from 'axios'
import gigToLaunch, { initialQuestions, finalQuestions } from './liveGigTemplate'
import editGig from './editGig'

const gig = {
  ...gigToLaunch,
  gig_survey_content: initialQuestions
}

console.log(gigToLaunch)
// editGig(gigToLaunch)
axios({
  method: 'post',
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8888
  // },
  url: 'http://api.gigwalk.com/c/v1/gig/create',
  headers: {
    Authorization: `Basic ${new Buffer('kris@gigwalk.com:core_masterf6AL2q3qF=U#rZHx').toString('base64')}`
  },
  data: gigToLaunch
})
.then((res) => {
  console.log('SUCCESSFULLY launched gig!', res.body)
})
.catch((err) => {
  console.log('ERROR launching gig', err)
})
