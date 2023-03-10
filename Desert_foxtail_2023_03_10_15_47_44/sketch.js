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
let opacity
 = 50;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}
function mousePressed() {
  r = random(100,255);
  g = random(100,255);
  b = random(100,255);
  diameter = random(16,64);
  opacity = random(16,70);
}
function draw() {
  fill(r, g, b, 100);
  ellipse(mouseX, mouseY, diameter, opacity);
  circle(mouseY, mouseX, diameter, opacity);
}