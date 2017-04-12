var im = require('imagemagick');

var imageSize = im.identify('map_ww.jpg', function(err, features){
  if (err) throw err;
  console.log(features);
  // { format: 'JPEG', width: 3904, height: 2622, depth: 8 } 
});

console.log(imageSize.features);