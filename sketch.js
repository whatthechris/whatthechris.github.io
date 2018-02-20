var mic;

function preload() {
  displayedmodel = loadModel('assets/teapot.obj', true);
}

function setup() {
	renderer = createCanvas(windowWidth, windowHeight+200, WEBGL);
	noCursor();
	modelData = new p5.Geometry(displayedmodel);
	verticesCount = modelData.detailX.vertices.length
	vertices = modelData.detailX.vertices

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	var vol = mic.getLevel();
	background(0);
	noFill();
	stroke(color(255, 0, 0));
	strokeWeight(0.5);
	rotateX(110);
	rotateY(frameCount * 0.01);

	updateModel();
	renderer.gHash = [];
	modelData.detailX.gid = undefined;
	model(modelData.detailX);

	// renderer.createBuffers('custom', modelData);
  // renderer.drawBuffers('custom');
}

function updateModel() {
	for (var i = 0; i < verticesCount; i+=20) {
	vertices[i].x = random(-50,200);
	vertices[i].y = random(-50,200);
	vertices[i].z = random(-50,200);
	// console.log("i = " + i + " - X: " + vertices[i].x);
	// console.log("i = " + i + " - Y: " + vertices[i].y);
	// console.log("i = " + i + " - Z: " + vertices[i].z);
	}
}
