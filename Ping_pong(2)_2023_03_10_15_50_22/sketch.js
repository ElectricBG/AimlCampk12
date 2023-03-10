var posX = 200 ; 
var posY = 200 ; 
var x = 5 ; 
var y = 2 ; 
var score = 0 ;
var AI_score = 0 ; 

var rectx = 10 ;
var recty = 150;

function setup() {
  
  createCanvas(400,400);
  
}
function draw() {
  textSize(20)
  background('yellow');
  fill('red');
  rect(rectx,recty,10,100);
  fill('blue');
  rect(380,mouseY,10,100);
  fill('purple');
  circle(posX,posY,15);
  fill('green')
  posY += y ;
  posX += x ;
  text("score: "+ score,10,20)
  text("AI score: "+ AI_score,10,50)
  textStyle(BOLD)
  text('Pong Game',140,20);
  if (posX>400|| posX<10){
    x =- x ;
    
  }
  if (posY>390 || posY<10){
    y = - y;
  }

  if ((posY > mouseY &&
      posY < mouseY + 90) &&
     (posX + 10 >= 390)) {
    
    score+=1;

  }
    if ((posY > recty &&
      posY < recty + 90) &&
     (posX + 10 <= 15)) {
    let  choice = [10,0,11,10,11,10,11,10,11,11,10,11,10,11,]
    AI_score+=random(choice);

  }
  // let choices = 
  //     ['f','f','t','f','f','f','f','f','f',]
  // var ran = random(choices)
  // text(ran,100,100)
  if (posX<400){
    recty = posY -50;
  }
  
  if (AI_score >= 200 && score < 200){
    textSize(40);
    text("AI wins !!",120,200);
    textSize(20);
    text("AI score: "+ AI_score,10,50);
    noLoop(); 
  }
  if (score >= 200 && AI_score < 200){
    textSize(40);
    text("Akshit Wins !!",90,200);
    textSize(20);
    text("score: "+ score,10,20);
    noLoop(); 
  }

  
  
}