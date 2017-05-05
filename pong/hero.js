function Hero()
{
  this.posicion =  createVector(0,height/2);
  this.velocidad = createVector(0,0);
  this.aceleracion = createVector(0,0.8);

  this.acelerar = function()
  {
    this.velocidad.add(this.aceleracion);
    this.velocidad.limit(10);
  }

  this.bajar = function()
  {
    this.acelerar();
    if(this.posicion.y + 150 < height)
    {
      this.posicion.add(this.velocidad);
    }
    else
    {
        this.velocidad.mult(0)
    }
  }
  this.subir = function()
  {
    this.acelerar();
    if (this.posicion.y > 0)
    {
      this.posicion.sub(this.velocidad);
    }
    else
    {
        this.velocidad.mult(0)
    }
  }
  this.mostrar= function()
  {
    noStroke();
    rect(this.posicion.x,this.posicion.y,25,150);
  }
}
