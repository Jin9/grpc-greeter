const { HelloRequest, HelloReply } = require('./helloworld_pb.js');
const { GreeterClient } = require('./helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://' + window.location.hostname + ':8080', null, null);

// simple unary call
var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.log(`Unexpected error for sayHello: code = ${err.code}` + `, message = "${err.message}"`);
  } else {
    console.log(response.getMessage());
  }
});
