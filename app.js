var inspect = require('eyespect').inspector()
var express = require('express')
var connect = require('connect')
var http = require('http')

module.exports = function(port, cb) {
  var app = express()
  app.use(connect.urlencoded())
  //app.use(connect.json())
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
    var body =''
    if (req.method.toLowerCase() !== 'post') {
      return res.end(output)
    }
    req.on('data', function (data) {
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
        req.connection.destroy();
      }
    })

    req.on('end', function () {
      inspect(body, 'post body')
      res.end(output)
    });

  }

}
