var im = require('imagemagick');

for(var i=0; i < 10; i++){
	console.log(i);
	im.convert(['map_ww.jpg', '-resize', '25x120', `test_${i}.jpg`], 
		function(err, stdout){
			if (err) throw err;
			console.log('stdout:', stdout);
			console.log(i);
		});
	console.log(i);
}
