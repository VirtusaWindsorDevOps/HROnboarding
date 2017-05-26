var http = require('http');
var url = require('url');
var fs = require('fs');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongourl = 'mongodb://ama:a1b2c3@ds051851.mongolab.com:51851/rmis';

function handleRequest(request,response) {

var url_parts = url.parse(request.url, true);
var data = JSON.stringify(url_parts.query);

request.on('end', function () {
      response.write(data);
	  response.end();
    });
		

executeMongo(mongourl,url_parts.query);

}

function executeMongo(url,data) {

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
        saveFile('registers.jsn',JSON.stringify(result)+ "\n");
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

http.createServer(handleRequest).listen(8080);
