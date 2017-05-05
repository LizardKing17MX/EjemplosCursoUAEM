function Enemigo(ballPos)
{
  this.posicion = createVector(width,height/2);
  this.velocidad = createVector(0,0);
  this.aceleracion = createVector(0,0);
  this.dir = createVector(0,0);
  this.ballPos = ballPos;

  this.checarBordes = function()
  {
    if(this.posicion.y < 0)
    {
      this.posicion.y = 0;
      this.aceleracion.y *= -1;
      this.velocidad.y *= -0.3;
    }
    if(this.posicion.y+150 > height)
    {
      this.posicion.y = height-150;
      this.aceleracion.y *= -1;
      this.velocidad.y *= -0.3;
    }
  }

  this.mover = function()
  {
    this.dir = p5.Vector.sub(this.ballPos, this.posicion);
    this.dir.normalize();
    this.dir.mult(0.8);
    this.checarBordes();
    this.aceleracion = this.dir;
    this.velocidad.add(this.aceleracion);
    this.posicion.add(this.velocidad);
  }
  this.dibujar = function()
  {
    rect(width-25,this.posicion.y,25,150);
  }
}
