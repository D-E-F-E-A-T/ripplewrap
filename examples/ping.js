const ripplewrap = require('../index')
const client = new ripplewrap({ server: 'https://ripple.moe', token: 1 })
client.ripple.misc.ping()
  .then(console.log)
  .catch(console.error)
