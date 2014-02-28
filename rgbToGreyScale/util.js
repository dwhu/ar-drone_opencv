var gm = require('gm');

exports.getSize = function(image,callback){

	return image.size(function(err,size){
		height = size.height;
		width = size.width;
		console.log("In image size" + height + " " + width);
		return height;	
	});	
}
