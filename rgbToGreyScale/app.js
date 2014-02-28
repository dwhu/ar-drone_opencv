var fs = require('fs')
  , gm = require('gm')
  , util = require("./util");

var image = gm('/Users/hughdw11/gitrepos/AR_DRONE/ar-drone_opencv/rgbToGreyScale/images/photo.jpg');


var height = 0, width = 0;

var size = util.getSize(image);
console.log("Outer function" + height + " " + width);
console.log("Outer function size" + (int) size);


var halfW = size.width/2, halfH = size.height /2; 

var middle = image.crop(50,50,halfW,halfH,function (err){
	console.log("\n\n" + halfW + " " + halfH);
	if(err) console.log("crop \n"  + err);
});

middle.write("./images/test.png", function(err){
	if(err) console.log("well shit couldnt write\n" + err );
});

//console.log(width + " " +height);

