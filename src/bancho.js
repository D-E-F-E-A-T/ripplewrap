const endpoints = require('../endpoints').bancho
const get = require('../get')

module.exports = (obq) => {
  const obj = {}

  Object.keys(endpoints).forEach(i => {
    obj[i] = (query = {}) => {
      return new Promise((resolve, reject) => {
        get(`${obq.bancho}${endpoints[i]}?${require('querystring').stringify(query)}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  return obj
}
