const endpoints = require('../endpoints').cheesegull
const get = require('../get')

module.exports = (obq) => {
  const obj = {}

  Object.keys(endpoints).forEach(i => {
    obj[i] = (query = 1) => {
      return new Promise((resolve, reject) => {
        get(`${obq.bancho}${endpoints[i]}${query}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  return obj
}
