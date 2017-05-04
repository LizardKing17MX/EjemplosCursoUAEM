var x=70;
var y=200;
function setup() {
createCanvas(windowWidth,windowHeight);
frameRate(30);
textAlign(LEFT);
train = new train();
}
function draw() {
background(200);
train.update();
train.draw();
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    train.direccion(-1);
  } else if (keyCode == RIGHT_ARROW) {
    train.direccion(1);
  }
  return false; // prevent default
}
