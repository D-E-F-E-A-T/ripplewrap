module.exports = (url, options) => {
  return new Promise((resolve, reject) => {
    require('https').get(url, options, res => {
      res.setEncoding('utf8')
      var data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) } catch (e) { reject(e.message) }
      })
    }).on('error', reject)
  })
}
