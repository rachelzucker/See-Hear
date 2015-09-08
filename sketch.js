var images = [];

var imgW = 1350;
var imgH = 400;

var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
var countDown1 = 0;
var countDown2 = 50;
var countDown3 = 100;

var finalCount;

var c = 0;
var d;

var resolution = 20;

var speed = 3.4;

var distance = 300;

var ending = false;
var sound;

function preload() {
  sound = loadSound('data/LARBshorter2.m4a');

  for (var i = 0; i < 85; i++) {
    images[i] = loadImage("data/" + (i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound.play();
  
  
}

function draw() {
  

  background(0);

  display(250, height / 2, choice1);
  display(675, height / 2, choice2);
  display(1100, height / 2, choice3);

  countDown1 = countDown1 + speed;
  countDown2 = countDown2 + speed;
  countDown3 = countDown3 + speed;

  if (countDown1 > 150) {
    choice1 = floor(random(0, images.length));
    countDown1 = 0;
  }
  if (countDown3 > 150) {
    choice3 = floor(random(0, images.length));
    countDown3 = 0;
  }
  if (countDown2 > 150) {
    choice2 = floor(random(0, images.length));
    countDown2 = 0;
  }

  finalCount = finalCount + 1;

  if (sound.currentTime() > sound.duration() - 22) {
    ending = true;
  }

  if (ending) {

    if (distance > 5) {
      distance = distance - 1;
    } else {
      distance = 5;
    }
  }

  var startY = height / 2 - imgH / 2;
  var endY = height / 2 + imgH / 2;

  for (var x = 0; x < imgW; x = x + resolution) {
    for (var y = startY; y < endY; y = y + resolution) {

      d = dist(x, y, mouseX, mouseY);
      c = map(d, 0, distance, 0, 255);
      noStroke();
      fill(0, c);
      rect(x, y, resolution, resolution);
    }
  }

  if (keyIsPressed && key == ' ') {
    
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
  }

}



function display(x, y, choice) {
  // tint(255,c);
  imageMode(CENTER);
  image(images[choice], x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}