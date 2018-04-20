var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2, c3;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	background(0);

	c1 = color(151,199,63);
	c2 = color(239,82,149);
	c3 = color(253,223,14);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	translate(0,mouseY)
	setGradient(0, 0, width, height/2, c3, c2, Y_AXIS);
	setGradient(0, 0+height/2, width, height/2, c2, c2, Y_AXIS);

}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}