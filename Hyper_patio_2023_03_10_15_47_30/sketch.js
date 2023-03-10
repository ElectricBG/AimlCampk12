function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let r = 255;
let g = 255;
let b = 255;
let diameter = 30;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}
function mousePressed() {
  r = random(100,255);
  g = random(100,255);
  b = random(100,255);
  diameter = random(16,64);
}
function draw() {
  fill(r, g, b, 100);
  circle(mouseX, mouseY, diameter);
}
