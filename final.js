var cnv, soundFile, fft, peakDetect, mic;
var scaleIncrease = 1;
var modelcount = 1;

function preload() {
  displayedmodel = loadModel('assets/cia_leaf.obj', true);
  soundFile = loadSound('assets/lovesick.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	noCursor();

	//mic setup and PeakDetect setup
	mic = new p5.AudioIn();
	mic.start();

	fft = new p5.FFT();
	fft.setInput(mic);
	peakDetect = new p5.PeakDetect(3000, 20000, 0.35, 5);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	//-------beat detection-------
		fft.analyze();
		peakDetect.update(fft);

		if ( peakDetect.isDetected ) {
	    scaleIncrease = 1;
			stroke(color(255, 200, 200));

	  } else {
	    scaleIncrease *= 0.95;
			stroke(color(255, 0, 0));
	  }
	//-------displays the model-------
		orbitControl();
		noFill();
		strokeWeight(1);
		rotateX(110);
	  	rotateY(frameCount * 0.005);
		scale(3+scaleIncrease,3+scaleIncrease,3+scaleIncrease);
	  	model(displayedmodel);
}

function keyPressed() {
    if (keyCode === ENTER) {
      	if (soundFile.isPlaying() ) {
			soundFile.pause();
			fft.setInput(mic);
	  	}else{
			soundFile.play();
			fft.setInput();
      	}
	}
}