var inspect = require('eyespect').inspector()
var express = require('express')
var connect = require('connect')
var http = require('http')

module.exports = function(port, cb) {
  var app = express()
  app.use(connect.urlencoded())
  app.use(connect.json())
  app.all('*', requestHandler)
  var server = http.createServer(app)
  server.listen(port, listenCB)

  function listenCB() {
    var output = {
      server: server,
      port: port
    }
    cb(null, output)

  }

  function requestHandler(req, res) {
    var output = 'hello world\n'
    console.log('got request')
    inspect('got request')
    inspect(req.headers, 'req.headers')
    inspect(req.url, 'req.url')
    inspect(req.body, 'req.body')
    res.end(output)
  }

}
