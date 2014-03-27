var http = require('http')

module.exports = function(port, cb) {
  var server = http.createServer()

  server.on('request', function(req, res) {
    var output = 'hello world\n'
    console.log('got request')
    console.dir(req.headers)
    console.dir(req.url)
    res.end(output)
  })
  server.listen(port, function() {
    var output = {
      server: server,
      port: port
    }
    cb(null, output)
  })
}
