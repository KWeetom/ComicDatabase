// var api = require('marvel-api');

// var marvel = api.createClient({
// publicKey: 'b418924bd54847ace74ceaa0e9b44017',
// privateKey: '16daedc6fc0a02f239a9ad700e10b526498a9afd'

// });



api('characters', {
  publicKey: 'b418924bd54847ace74ceaa0e9b44017',
  privateKey: '.. your private key ..',
  timeout: 4000,
  query: {
    limit: 50
  }
}, function (err, body) {
  if (err) throw err
  
  // total # of items 
  console.log(body.data.total)
  
  // array of characters 
  console.log(body.data.results)
})

// var cName = prompt("Input the name of the character you want, ");

// marvel.characters.findByName(cName).then(function(res){
// 	console.log(cName + "'s id is "+ res.data[0].id);
// })
// .done();
// //return 