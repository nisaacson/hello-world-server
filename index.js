var http = require('http')
var should = require('should')

var port = process.env['PORT'] || 3000
var app = require('./app')

app(port, function (err, reply) {
  should.not.exist(err)
  should.exist(reply)
  should.exist(reply.port, 'port field missing from app callback')
  reply.port.should.eql(port)
  console.log('hello world server listening on port: %s', port)
})
