var xc;
var y=0;
var v,velocidad,aceleracion;
var heroe;
function setup()
{
 createCanvas(windowWidth,windowHeight);
 v=createVector(50,50);
 velocidad=createVector(0.5,1.5);
 aceleracion= createVector(0.1,1.2);
 heroe = new Heroe();
}
function draw()
{

  heroe.dibujar();
  heroe.moverse();

}
