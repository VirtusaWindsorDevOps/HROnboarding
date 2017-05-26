var http = require('http');
var carrierGateways = require("carrier-gateways");
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('9TU70zpbtHv7_jxdTKjrfw');

http.createServer(function (req, res) {

console.log('Request received');
var body = "";

req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log(body);
    res.writeHead(200, { 'Content-Type': 'text/plain','Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
	
   var jsn =JSON.parse(body);	
   var sms = carrierGateways.getAddress(jsn.mobile,jsn.carrier);	
   res.end('{"msg": "'+sms+'"}'); 
   
  });
   			
}).listen(90);
console.log('Server running at port 90');


function processRequest(req, res) {
	
var fullBody = '';

req.on('data', function (chunk) {
       fullBody += chunk.toString();
    });
	
console.log(fullBody);
	
var sms = carrierGateways.getAddress("925-768-9896", "Verizon");
console.log(sms);
  
res.writeHead(200, { 'Content-Type': 'text/plain','Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
	
res.end('{"msg": "'+sms+'"}'); 

}