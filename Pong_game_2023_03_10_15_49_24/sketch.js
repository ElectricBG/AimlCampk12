xpos = 200
ypos = 200
dx = 5;
dy = 3;
function setup() {
  createCanvas(600, 450);
}

function draw() {
  background('powderblue');
  rect(10,ypos,10,80);
  rect(580,mouseY,10,80);
  ellipse(xpos,ypos,20,20);
  if (xpos>=width-20 || xpos==20)
    {
      dx = -dx
    }
  if (ypos>=height-20 || ypos==20)
    {
      dy = -dy
    }
  fill('white');
  text('PONG GAME',10,20);
  text('PONG GAME',520,20);
  for (var i=0; i < 400; i+=20) {
     line(320,i,320,i+10);
  } 
  xpos = xpos +dx;
  ypos = ypos +dy;
}