var http = require('http');
var url = require('url');
var geoip = require('geoip-lite');


var server = http.createServer(function (req, res) {
      
        processRequest(req, res);
    
}).listen(81);

function processRequest(req, res) {

if(req.method=='GET' && req.url != '/favicon.ico'){

var url_parts = url.parse(req.url, true);
var data = url_parts.query;

    console.log(req.method + ": " + req.url);
	
	executeGeo(req,responseHandler,res);
				
    
	}
}

function responseHandler(res,text){

    res.writeHead(200, { 'Content-Type': 'text/plain','Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
    res.write(text);
    res.end();

}

function executeGeo(req,callback,res) {
		
	var ip = (req.headers["X-Forwarded-For"] ||
            req.headers["x-forwarded-for"] ||
            '').split(',')[0] ||
           req.client.remoteAddress;
    
	 var geo = geoip.lookup(ip);
	 geo.ip=ip;
	 geo.agent=req.headers["user-agent"];
	 
     var Geostr = JSON.stringify(geo);	 
		
     callback(res,Geostr);

}




