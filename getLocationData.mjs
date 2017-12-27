import axios from 'axios'
import GoogleMapsAPI from 'googlemaps'

const publicConfig = {
  key: 'AIzaSyD-9y0o-vT5Nyf358Zo2jBkVCPinGJDhmI',
  stagger_time:       1000,
  // proxy:              'http://127.0.0.1:8888'
};
const gmAPI = new GoogleMapsAPI(publicConfig);

export default (addresses) => Promise.all(addresses.map((address) => new Promise((res, rej) => {
  gmAPI.geocode({ address }, (err, response) =>  {
    if (err) rej(err)
    else {
      let location = response.results[0]
      res({
        ...(location.address_components.reduce((acc, component) =>
            ({
                ...acc,
                [component.types[0]]: {
                    long_name: component.long_name,
                    short_name: component.short_name
                }
            })
            , {})
        ),
        formatted: location.formatted_address,
        specificity: location.types[0],
        lat: location.geometry.location.lat,
        long: location.geometry.location.long
      })
    }
  })
})))
