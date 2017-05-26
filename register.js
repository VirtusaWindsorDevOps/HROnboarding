var http = require('http');
var url = require('url');
var fs = require('fs');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongourl = 'mongodb://ama:a1b2c3@ds051851.mongolab.com:51851/rmis';

var server = http.createServer(function (req, res) {
      
        processRequest(req, res);
    
}).listen(8181);

function processRequest(req, res) {

if(req.method=='GET' && req.url != '/favicon.ico'){

var url_parts = url.parse(req.url, true);
var data = url_parts.query;

    console.log(req.method + ": " + req.url);
	
	executeMongo(mongourl,data,responseHandler,res);
				
    
	}
}

function responseHandler(res,text){

    res.writeHead(200, { 'Content-Type': 'text/plain','Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
    res.write(text);
    res.end();

}


function executeMongo(url,data,callback,res) {

MongoClient.connect(url, function (err, db) {

  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
	
  } else {
    
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('referrals');

    collection.insert([data], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "referrals" collection. The documents inserted with "_id" are:', result.length, result);
        
		var jsnStr=JSON.stringify(result);
		
		saveFile('registers.jsn',jsnStr+ "\n");
		
		callback(res,jsnStr);

	  }
      //Close connection
      db.close();
	  
	  
    });
  }
});


}
function saveFile(file,data) {

var jsn = data.trim() + '\n';

fs.appendFile(file,jsn,function(err){
  if(err)
    console.error(err);
  console.log('Referral Registered!');
});

}



