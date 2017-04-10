let imageFile = "map_ww.jpg";
let tileSize = 100;

let imageSize = exec(`magick identify ${imageFile}`);

for (let x = 0; x < imageSize.width; x += tileSize) {
	for (let y = 0; y < imageSize.height; y += tileSize) {
		exec(`magick convert -crop ${x}x${y}+${tileSize}+${tileSize} ${imageFile} tiles/${x}-${y}.jpg`);
	}
}