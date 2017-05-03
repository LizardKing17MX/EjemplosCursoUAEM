function setup()
{
  createCanvas(windowWidth,windowHeight);
}

function draw()
{
   background("#FFF");
   fill("#000");
   noStroke();
   ellipse(mouseX,mouseY,10,10);
   stroke("red");
   text("("+mouseX+","+mouseY+")",mouseX+10,mouseY);
   stroke("black");
   line(0,mouseY,mouseX,mouseY);
   stroke("blue");
   text("X",10,mouseY-10);
   stroke("black");
   line(mouseX,0,mouseX,mouseY);
   stroke("blue");
   text("Y",mouseX+10,20);
}
