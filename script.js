console.log('Started');
var http = require('http');
var fs = require('fs');
var api = require('marvel-api');

//this block allows the server to render the html
http.createServer(function (req, res) {
  //fs reads the defined html file
    fs.readFile ('index.html',function(err,data){
      //header is required to tell server what kind of data is being read
      res.writeHead(200, {'Content-Type': 'text/html'});
      //res.write('Hello World!');
      //writes the html to the page with data from index.html
      res.write(data);
      res.end();
    });
}).listen(8080);


var marvel = api.createClient({
publicKey: 'b418924bd54847ace74ceaa0e9b44017',
privateKey: '16daedc6fc0a02f239a9ad700e10b526498a9afd'
});

// api('characters', {
//   publicKey: 'b418924bd54847ace74ceaa0e9b44017',
//   privateKey: '.. your private key ..',
//   timeout: 4000,
//   query: {
//     limit: 50
//   }
// }, function (err, body) {
//   if (err) throw err
  
//   // total # of items 
//   console.log(body.data.total)
  
//   // array of characters 
//   console.log(body.data.results)
// })

// var cName = prompt("Input the name of the character you want, ");

// marvel.characters.findByName("spiderman").then(function(res){
// 	console.log("Spiderman's id is "+ res.data[0]);
//   return marvel.characters.comics(res.data[0].id);

// })
// .fail(function(){
//   console.log('error');
// })
// .done();
// //return 

//this code finds a character based on the name given. Hopefully will be determined by user
//input
marvel.characters.findByName('spider-man',function(err, results) {
  if (err) {
    return console.error(err);
  }
  console.log(results.data[0]);
});


