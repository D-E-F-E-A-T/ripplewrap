const endpoints = require('../endpoints').ripple
const get = require('../get')

module.exports = (obq) => {
  const obj = {
    tokens: {},
    users: {},
    scores: {},
    misc: {}
  }

  Object.keys(endpoints.tokens).forEach(i => {
    obj.tokens[i] = (query = {}) => {
      return new Promise((resolve, reject) => {
        get(`${obq.ripple}${endpoints.tokens[i]}?${require('querystring').stringify(query)}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  Object.keys(endpoints.users).forEach(i => {
    obj.users[i] = (query = {}) => {
      return new Promise((resolve, reject) => {
        get(`${obq.ripple}${endpoints.users[i]}?${require('querystring').stringify(query)}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  Object.keys(endpoints.scores).forEach(i => {
    obj.scores[i] = (query = {}) => {
      return new Promise((resolve, reject) => {
        get(`${obq.ripple}${endpoints.scores[i]}?${require('querystring').stringify(query)}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  Object.keys(endpoints.misc).forEach(i => {
    obj.misc[i] = (query = {}) => {
      return new Promise((resolve, reject) => {
        get(`${obq.ripple}${endpoints.misc[i]}?${require('querystring').stringify(query)}`, { headers: { 'X-Ripple-Token': obq.token } })
          .then(resolve)
          .catch(reject)
      })
    }
  })

  return obj
}
