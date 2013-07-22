var http = require('http')

module.exports = function(port, cb) {
  var server = http.createServer()

  server.on('request', function(req, res) {
    var output = 'hello world\n'
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
