import request from 'request'
import gigJSON from './gigTemplate'

export default (options) => new Promise((res, rej) => {
  const gigToEdit = Object.assign(gigJSON, options)

  request({
    headers: {
      Cookie: 'km_ai=0ur0gxrQWVAK4T%2BPJuWvCWUaP2Y%3D; km_lv=x; km_ni=customer_login; km_uq=; __stripe_mid=134dd87a-c7d7-4510-99a0-3a0b43911c50; _ga=GA1.2.274475825.1475708886; _gid=GA1.2.1840915319.1513277486; __utmt=1; __utma=128082458.274475825.1475708886.1513303558.1513325226.19; __utmb=128082458.1.10.1513325226; __utmc=128082458; __utmz=128082458.1512175668.16.9.utmcsr=gigwalk.com|utmccn=(referral)|utmcmd=referral|utmcct=/gig_posted_confirm.php; _mkto_trk=id:858-GUP-425&token:_mch-gigwalk.com-1484777193546-41885; kvcd=1513325227187; km_vs=1; Gigwalk_permanent_v2=%7B%22clia%22%3A%228BBOhz33E6b6pTTrWgpt4v4rXH94C0oM25nHwTLpLw0NBzmrt%2B1aNu67B0qERPDqY9LXGOD%2Bv3ucFx%2Be6ypFFg%3D%3D%22%2C%22clie%22%3A%22u3BSlvB60caGDJdtD3%2Bt1rd6u8RJMyyl3bn5%5C%2F%5C%2F6USOw%3D%22%2C%22clivs%22%3A%22p7XwkofKpJhApeVG4upzSEaf%5C%2FGWXY3Q7dItkFM3mGg%2BdQClZ%2Bg9%5C%2F091kI1l6FnNlRl6%2BSrnLvAmlZDhmypS4lLjHCwQ%2BgTQWXdlf6btExhDnLPjVAWxcp0VXn9XZze1GDIo3TlMKmpNFHy7Z2zLpP0rNqB%5C%2F5GPzUhvcLUjy3zTQ%3D%22%2C%22clogo%22%3A%22WBlINLTjQ7Obl%2ByMQS9J3wNZ2TpmJjeCHlEJpMOPW5ItdAX%2BJh0Ofr6%2BEGbZas7cdJxSnheRhsmTUrdEYn8X5cuJDr6%5C%2F2ubjyodXtqPECvtrKoUEjk0DoSRF0c0TJYdF%22%2C%22clit%22%3A%2268t64Zh5gqItJy%2BFP16cOnLNONnkrp7Lyl8RmbxQB5s%3D%22%2C%22chsi%22%3A%221JPL3iXYFyjOedMtA4UQ39bosPvclNCLRPrQTDf%2BFPY%3D%22%2C%22cb%22%3A%22IjEo03po2rbH1XtlRdqpM%5C%2FIKvMmAo1vJCWuq6T4xnFc%3D%22%2C%22ccn%22%3A%221JPL3iXYFyjOedMtA4UQ39bosPvclNCLRPrQTDf%2BFPY%3D%22%2C%22cioa%22%3A%221JPL3iXYFyjOedMtA4UQ39bosPvclNCLRPrQTDf%2BFPY%3D%22%7D',
      Host: 'gigwalk.com',
      Origin:'http://gigwalk.com',
      Accept: 'application/json, text/javascript, */*; q=0.01'
    },
    method: 'POST',
    uri: 'http://gigwalk.com/c/postAGig?',
    proxy: 'http://127.0.0.1:8888',
    formData: {
      protoGigJSON: JSON.stringify(gigToEdit),
      action: 'saveAsDraft-AJAX'
    }
  }, (err, response, body) => {
    if (err) {
      rej(err)
    } else {
      if (JSON.parse(body).successFlag) {
        res(JSON.parse(body))
      } else {
        rej(JSON.parse(body))
      }
    }
  })
})
