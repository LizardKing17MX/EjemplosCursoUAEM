/*
  Author:
    *Jesus Ramirez Nieto
    *David Guillermo Robles Sánchez

  Ejemplo para el manejo de vectores y de programacion
  orientada a objetos 
*/
var vector;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  //instanciación del objeto vector

  vector = new vector();
}

function draw()
{
    //Background añade un fondo para el canvas
    //Puedes colocar un color ya sea en escala de grises, RGB, Hex, Hsl
   background("#FFF");
   //fill rellena las figuras geometricas que tenga debajo de la sentencia
   fill("#000");
   //noStroke previene que se dibuje un borde en la figura
   noStroke();
   //se llama a la funcion draw del objeto en este caso vector
   vector.draw(mouseX,mouseY);
}
