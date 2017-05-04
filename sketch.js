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
   line(0,0,mouseX,mouseY);
   noStroke();
   fill("blue");
   triangle(mouseX,mouseY,mouseX,mouseY-10,mouseX-10,mouseY);

   text(mouseX,mouseX/2,mouseY+15);
   text(mouseY, mouseX+15,mouseY/2);
   fill("red");
   text(floor(sqrt(mouseX*mouseX+mouseY*mouseY)), (mouseX+10)/2,(mouseY-10)/2);
}
