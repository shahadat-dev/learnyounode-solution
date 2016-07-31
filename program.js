// step 1 : Intro
//console.log('HELLO WORLD');

// sterp 2 : Baby Step

/*var result = 0;
for(var i=2; i<process.argv.length; i++){
	result += Number(process.argv[i]);
}
console.log(result);
*/

//step 3 : My First I/O

//console.log(process.argv[2]);
/*var fs = require('fs');
var data = fs.readFileSync(process.argv[2]).toString();
data = data.split('\n');
console.log(data.length-1);*/

//step 4 : My First Assync I/O

/*var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf8', function callback(err, data){
	console.log(data.split('\n').length - 1);
});*/

// step 5 : Filtered LS

/*var fs = require('fs');
var path = require('path');
var dir_path = process.argv[2];
var ext = "."+process.argv[3];

fs.readdir(dir_path, function(err, files){
	files.forEach(function(file){
		if(err){console.log(err)}
		if(path.extname(file) === ext){
			console.log(file);
		}
	});
});*/

// step 6 : Make it Modular

/*var mymodule = require('./mymodule'),
	dir = process.argv[2],
	ext = process.argv[3];

mymodule(dir,ext,function(err,data){
	if(err) return console.error("There was an error: ", err);
	data.forEach(function(el){
	console.log(el);
	});
});*/

// step 7 : HTTP Client

/*var http = require('http'),
	url = process.argv[2];

http
.get(url, function(response){
	response.setEncoding("utf8");
	response.on('data', function(data){
		console.log(data);
	});
	response.on('error', function(e){
		console.log("There was an error: ", e.message);
	});	
})
.on('error', function(e){
	console.log("There was an error: ", e.message);
});*/

// step 8 : HTTP Collect

/*var http = require('http')
	,bl = require('bl'),
	url = process.argv[2];

http.get(url, function(response){

	response.pipe(bl(function(err,data){
		if(err){console.log(err)}
		console.log(data.toString().length);
		console.log(data.toString());
	}))
	
	response.on('error', function(e){
		console.log("There was an error: ", e.message);
	});	
})

.on('error', function(e){
	console.log("There was an error: ", e.message);
});
*/

// step 9 : Juggling Async

/*var http = require('http')
	,bl = require('bl')
	,url1 = process.argv[2]
	,url2 = process.argv[3]
	,url3 = process.argv[4];

// 1st url
http.get(url1, function(response){

	response.pipe(bl(function(err,data){
		if(err){console.log(err)}
		console.log(data.toString());
	}));

	// 2nd url
	http.get(url2, function(response){
		response.pipe(bl(function(err,data){
			if(err){console.log(err)}
			console.log(data.toString());
		}));

		// 3rd url
		http.get(url3, function(response){
			response.pipe(bl(function(err,data){
				if(err){console.log(err)}
				console.log(data.toString());
			}));
		}); // end 3rd url
		
	}); // end 2nd url

}); // end 1st url
*/

// step 10 : Time Server




