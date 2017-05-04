function Heroe()
{
   this.x= 0;
   this.y = 0;

  this.moverse= function()
  {
    this.x +=1;
    this.y+=1;
  }
  this.dibujar = function()
  {
    ellipse(this.x,this.y,50,50);
  }
}
