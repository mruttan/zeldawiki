var im = require('imagemagick');


var imageSize = im.identify('map_ww.jpg', function(err, features){
	if (err) throw err;
  //console.log(features); returns block of info
  console.log(features.width); //returns width

  var tileSize = 10;
  console.log(tileSize); //returns 10


  //working as intended, but unable to create a new directory to save into, must have existing "tiles" directory made
  for(var i=0; i < features.width; i+= 100){
  	im.convert(['map_ww.jpg', '-resize', '25x120', `tiles/test_${i}.jpg`], 
  		function(err, stdout){
  			if (err) throw err;
  			console.log('stdout:', stdout);
  		});
  	console.log(i);
  }



});

console.log(imageSize.features); //returns nothing