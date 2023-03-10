let clearButton;
let div1;
let div2;

function setup() {
  createCanvas(500, 500);
  clearButton = createButton("CLEAR");
  clearButton.mousePressed(clearCanvas);
  
  background(220);
  div1 = createDiv("div1");
  div2 = createDiv("div2");
}

function clearCanvas(){
  background(220);
}
function draw() {
  if(mouseIsPressed){
    strokeWeight(16)
   line(pmouseX, pmouseY, mouseX, mouseY); 
  }
}