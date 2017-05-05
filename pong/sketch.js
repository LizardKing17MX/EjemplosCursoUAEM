var hero, ball;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  //localizacion = createVector(100,100);
  //velocidad = createVector(0,0);
  hero = new Hero();
  ball = new Ball();
  enemigo = new Enemigo(ball.posicion);
}

function draw()
{
    background("#000");
    fill("#fff");
    if(keyIsPressed)
    {
      if(keyCode === UP_ARROW)
      {
         hero.subir();
      }
      else if(keyCode === DOWN_ARROW)
      {
        hero.bajar();
      }
    }
    hero.mostrar();
    ball.checarBordes();
    ball.checkCollision(hero.posicion,enemigo.posicion);
    ball.moverse();
    ball.dibujar();
    enemigo.mover();
    enemigo.dibujar();

    textSize(20);
    text(ball.scoreP, width/2-50, 50);
    text(ball.scoreE, width/2+50, 50);

}
