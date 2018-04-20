function preload() {
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	var red = map(mouseX, 0, width, 151, 253);
	var green = map(mouseY, 0, height, 82, 220);
	var blue = map(mouseX, 0, width, 14, 254);
	background(red,green,blue);
}
