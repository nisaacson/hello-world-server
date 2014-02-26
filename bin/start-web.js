#!/usr/bin/env node

var port = process.env.PORT || 3000
var app = require('../app')

app(port, function (err, reply) {
  if (err) {
    throw err
  }
  console.log('hello world server listening on port: %s', reply.port)
})
