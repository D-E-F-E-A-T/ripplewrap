const ripple = require('./src/ripple')
const bancho = require('./src/bancho')
const cheesegull = require('./src/cheesegull')

module.exports = class {
  constructor(obj = { server: 'https://ripple.moe', token: 0 }) {
    const url = new URL(obj.server)
    obj = { ripple: `${obj.server}/api/v1`, token: obj.token }
    url.host = `storage.${url.host}`
    obj.cheesegull = `${url.origin}/api`
    url.host = url.host.replace('storage', 'c')
    obj.bancho = `${url.origin}/api/v1`
    this.ripple = ripple(obj)
    this.bancho = bancho(obj)
    this.cheesegull = cheesegull(obj)
    this.types = require('./endpoints').types
  }
}
