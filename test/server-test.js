var should = require('should')
var request = require('request')
var portfinder = require('portfinder')

describe('Start server', function() {
  var port
  before(function(done) {
    portfinder.getPort(function(err, portReply) {
      should.not.exist(err)
      port = portReply
      done()
    })
  })

  it('should start server and response to requests with the content "hello world"', function(done) {
    this.slow('1s')
    require('../app')(port, function(err, reply) {
      should.not.exist(err)
      should.exist(reply)
      should.exist(reply.port, 'port field missing in reply')
      var url = 'http://localhost:' + reply.port
      var requestOpts = {
        url: url,
        method: 'post',
        body: 'fizz,buzy'
      }
      request(requestOpts, function(err, res, body) {
        should.not.exist(err)
        should.exist(body)
        res.statusCode.should.eql(200)
        body.should.eql('hello world\n')
        done()
      })
    })
  })

})

