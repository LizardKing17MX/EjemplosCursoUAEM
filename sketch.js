var vector;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  vector = new vector();
}

function draw()
{
   background("#FFF");
   fill("#000");
   noStroke();
   vector.draw(mouseX,mouseY);
}
