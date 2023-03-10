var video;
var classifier;
var prediction = " ";

function setup() {
  createCanvas(640, 520);
  video = createCapture(VIDEO);
  video.hide()
  
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady(){
  console.log("Model is ready");
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(24);
  text(prediction, 250, 502);
}

function gotResults(err, result){
  if(err){
    console.error(err);
  }
  console.log(result);
  prediction = [0].label;
  classifier.classify(video, gotResults);
}
