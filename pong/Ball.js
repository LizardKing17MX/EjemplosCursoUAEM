function Ball()
{
  this.posicion = createVector(0,0);
  this.velocidad = createVector(0,0);
  this.aceleracion= createVector(0.31,0.1);
  this.scoreE = 0;
  this.scoreP = 0;

  this.moverse = function()
  {
    this.velocidad.add(this.aceleracion);
    this.velocidad.limit(10);
    this.posicion.add(this.velocidad);


  }
  this.checarBordes = function()
  {
    if(this.posicion.x > width+50)
    {
      this.velocidad.x *= -0.2;
      this.aceleracion.x *= -1;
      this.posicion.x = width/2;
      this.posicion.y = height/2;
      this.velocidad.mult(0)
      this.scoreP++;
    }
    else if (this.posicion.x < -50)
    {
      this.velocidad.x *= -0.2;
      this.aceleracion.x *= -1;
      this.posicion.x = width/2;
      this.posicion.y = height/2;
      this.velocidad.mult(0);
      this.scoreE++;
    }
    if(this.posicion.y > height)
    {
      this.velocidad.y *= -0.2;
      this.aceleracion.y *= -1;
      this.posicion.y = height;
    }
    else if (this.posicion.y < 0)
    {
      this.velocidad.y *= -0.2;
      this.aceleracion.y *= -1;
      this.posicion.y = 0;
    }
  }
  this.dibujar = function()
  {
      noStroke();
      ellipse(this.posicion.x,this.posicion.y,50,50);
  }
  this.checkCollision = function(heroPos, enemigoPos)
  {
    this.hero = heroPos;
    this.enemigo = enemigoPos;
    if(this.posicion.y > this.hero.y
       && this.posicion.y < this.hero.y+150
       && this.posicion.x> 0
       && this.posicion.x < 50)
     {
       this.velocidad.x *= -0.2;
       this.aceleracion.x *= -1;
       this.posicion.x = 50;

     }
     if(this.posicion.y > this.enemigo.y
        && this.posicion.y < this.enemigo.y+150
        && this.posicion.x < width
        && this.posicion.x > width-50)
     {
       this.velocidad.x *= -0.2;
       this.aceleracion.x *= -1;
       this.posicion.x = width-50;

     }
  }
}
