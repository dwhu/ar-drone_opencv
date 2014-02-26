var fs = require('fs')
  , gm = require('gm')
  , util = require("./util");

var image = gm('/Users/hughdw11/gitrepos/AR_DRONE/ar-drone_opencv/rgbToGreyScale/images/photo.jpg');
var height=0, width = 0;



var center = util.getSize(image,function(err,width,height){
	console.log(width + " " + height);
});