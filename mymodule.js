var fs = require('fs')
	,path = require('path');

function getFiles(dir,ext,callback){
	fs.readdir(dir, function(err,files){
		if(err){ return callback(err); }

		files = files.filter(function(file){
			return path.extname(file) === "."+ext;
		});		
		callback(null, files);
	})
}

module.exports = getFiles;