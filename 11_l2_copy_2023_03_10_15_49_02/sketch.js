
let bodypix;
let video;
let img;

function preload() {
  bodypix = ml5.bodyPix(video);
  img = loadImage('background.jpg');
}

function setup() {
  createCanvas(320, 240);
  // load up your video
  video = createCapture(VIDEO, videoReady);
  video.size(width, height);
  
}

function videoReady() {
  console.log("Model Ready!!");
}

function draw() {
  background(img);
}

