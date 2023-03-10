let video;
let predictions = [];
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}
function draw() {
  image(video, 0, 0, width, height);
  
  let facemesh = ml5.facemesh(video, modelReady);
  
  facemesh.on("predict", results);
  
  video.hide();
}

function modelReady() {
  console.log("Model Ready");
}
function results(result){
  predictions = result;
  console.log(predictions);
}
function draw() {
  image(video, 0, 0, width, height);
  drawKeypoints();
}
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i++) {
    let keypoints = predictions[i].scaledMesh;
    
    for (let j = 0; j < keypoints.length; j += 1) {
    let [x, y] = keypoints[j];
      
      fill(0, 255, 0);
      ellipse(x, y, 5, 5);
      
    }
    
  }
}
  
