var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req,res){

var contents = fs.readFileSync('referrals.jsn').toString();

    res.end(contents);
	
});
app.listen(3000);
