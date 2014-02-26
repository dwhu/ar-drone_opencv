var gm = require('gm');

exports.getSize = function(image,callback){
	var height,width;
	image.size(function(err,size){
		height = size.height;
		width = size.width;
		callback(err,width,height);
	});	
}
