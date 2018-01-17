var url = 'http(s)://gateway.marvel.com:80/';
var characters = 'v1/public/comics';
// var cName =  prompt("Char name");

var PRIVATE_KEY = '16daedc6fc0a02f239a9ad700e10b526498a9afd';
var PUBLIC_KEY= 'b418924bd54847ace74ceaa0e9b44017';

$(document).ready(function(){
	console.log('ready');
});

$('#submit').click(function(){
	// console.log($('#charname').val());
	var cname = $('#charname').val();
	getCharData(cname);
});


function getCharData(target){
	 var ts = new Date().getTime();
	 var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
	 // var hash = md5(ts + PUBLIC_KEY + PRIVATE_KEY).toString();
	console.log(hash);

	 var charID = '1009718'

	 // var c_url = url+characters;
	 // var c_url = 'https://gateway.marvel.com:443/v1/public/characters?name=spiderman&ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+hash;
	var c_url = 'http://gateway.marvel.com/v1/public/characters?';
	 console.log(c_url);
	 var targetName;
	 var targetDesc;

	 $.getJSON(c_url,{
	 	ts:ts,
	 	apikey: PUBLIC_KEY,
	 	hash: hash,
	 	name: target
	 })
	 .done(function(results){
	 	console.log(results);
	 	targetName = results.data.results[0].name;
	 	targetDesc = results.data.results[0].description;
	 	targetImg = results.data.results[0].thumbnail.path;
	 	ext = results.data.results[0].thumbnail.extension;

	 	writeData(targetName,targetDesc,targetImg+'.'+ext);
	 })
	 .fail(function(err){
	 	console.log(err);
	 })

	 console.log(targetName);
	 // $('#targetDesc').html() = targetDesc;
};


function writeData(name, description,img){
	$('#targetName').html(name);	
	$('#targetDesc').html(description);
	$('#targetImg').attr('src',img);
	$('#targetImg').attr('class',null);


	// content = sole.log('')
	// console.log(img+'.'+ext)

}
// function getData(){
// 	 var ts = new Date().getTime();
// 	 var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
// 	 // var hash = md5(ts + PUBLIC_KEY + PRIVATE_KEY).toString();
// 	console.log(hash);

// 	 var charID = '1009718'

// 	 // var c_url = url+characters;
// 	 // var c_url = 'https://gateway.marvel.com:443/v1/public/characters?name=spiderman&ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+hash;
// 	var c_url = 'http://gateway.marvel.com/v1/public/comics?';
// 	 console.log(c_url);

// 	 $.getJSON(c_url,{
// 	 	ts:ts,
// 	 	apikey: PUBLIC_KEY,
// 	 	hash: hash,
// 	 	characters: charID
// 	 })
// 	 .done(function(data){
// 	 	console.log(data);
// 	 })
// 	 .fail(function(err){
// 	 	console.log(err);
// 	 })
// };

// getData();

// $(function(){
// var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
// $.getJSON( marvelAPI, {
//     apikey: PUBLIC_KEY
//   })
//     .done(function( response ) {
//       var results = response.data.results;
//       var resultsLen = results.length;
//       var output = '<ul>'; 
      
//       for(var i=0; i<resultsLen; i++){
//         if(results[i].images.length > 0) {
//           var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
//           output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
//         }
//       }  
//       output += '</ul>'
//       $('#results').append(output);
//   });
// });
