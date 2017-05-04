function vector()
{

this.draw = function(mouseVectorX,mouseVectorY)
  {
    ellipse(mouseVectorX,mouseVectorY,10,10);
    stroke("red");
    text("("+mouseVectorX+","+mouseVectorY+")",mouseVectorX+10,mouseVectorY);
    stroke("black");
    line(0,mouseVectorY,mouseVectorX,mouseVectorY);
    stroke("blue");
    text("X",10,mouseVectorY-10);
    stroke("black");
    line(mouseVectorX,0,mouseVectorX,mouseVectorY);
    stroke("blue");
    text("Y",mouseVectorX+10,20);
    line(0,0,mouseVectorX,mouseVectorY);
    noStroke();
    fill("blue");
    triangle(mouseVectorX,mouseVectorY,mouseVectorX,mouseVectorY-10,mouseVectorX-10,mouseVectorY);

    text(mouseVectorX,mouseVectorX/2,mouseVectorY+15);
    text(mouseVectorY, mouseVectorX+15,mouseVectorY/2);
    fill("red");
    text(floor(sqrt(mouseVectorX*mouseVectorX+mouseVectorY*mouseVectorY)), (mouseVectorX+10)/2,(mouseVectorY-10)/2);
  }
}
