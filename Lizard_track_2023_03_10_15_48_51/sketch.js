let segmentation;
let bodypix;
let video;
let img;

const options = {
  outputStride: 8,
segmentationThreshold: 0.3,
};

function preload() {
  bodypix = ml5.bodyPix(options);
  img = loadImage('image_2023-02-06_195622901.png');
}

function setup() {
  createCanvas(320, 240);
  // load up your video
  video = createCapture(VIDEO, videoReady);
  video.size(width, height);
  
}

function videoReady() {
  bodypix.segment(video, gotResults);
}

function draw() {
  background(img);
  if (segmentation) {
image(segmentation.backgroundMask, 0, 0, width, height);
  }
}
function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  segmentation = result;
  bodypix.segment(video, gotResults);
}

