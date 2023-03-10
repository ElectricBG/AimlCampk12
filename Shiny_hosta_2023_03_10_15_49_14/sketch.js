let video;
let classifier;
let label;

function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2lGqvjYgb/')
}

function setup() {
  createCanvas(640, 520);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

function classifyVideo(){
  classifer.classify(video (err, res) => {
    if(err){
      console.error(err);
    }
    
    label = res[0].label;
    classifyVideo();
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  
  textSize(28);
  fill(200);
  text(label, width/2 , height/2);
  
  textSize(100);
  
  if (label == 'Happy'){
    text('😃', width/2, height/2);
  }else if (label == 'Sad') {
    text('☹️', width/2 - 40, height/2);
  }
  else if (label == 'Wearing glasses') {
    text('😎', width/2 - 40, height/2);
  }
  else if (label == 'Wear Mask') {
    text('😷', width/2 - 40, height/2);
  }
  else if (label == 'Do Nothing') {
    text('🙅‍♂️', width/2 - 40, height/2);
  }
}
