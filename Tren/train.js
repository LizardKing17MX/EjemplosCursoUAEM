function train(){
  
this.x=70;
this.y=200;
this.xspeed=0;
this.yspeed=0;

this.direccion = function(x)
  {
    this.xspeed = x;

  }
  //Aumenta la velocidad en X y Y
this.update = function()
  {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
this.draw = function()
  {
    strokeWeight(2);
    stroke(51);
    rect(this.x,this.y,150,300);
    rect(this.x+150,this.y+150,300,150);
    rect(this.x+300,this.y+300,150,50);
    rect(this.x-50,this.y-50,250,50);
    rect(this.x+25,this.y+30,100,100);
    rect(this.x+300,this.y+100,50,50);
    quad(this.x+300,this.y+100, this.x+350, this.y+100, this.x+370, this.y+30, this.x+280, this.y+30);
    triangle(this.x+450, this.y+150, this.x+450, this.y+350,this.x+600,this.y+350);
    ellipse(this.x+70, this.y+330, 100, 100 );
    ellipse(this.x+200, this.y+330, 100, 100) ;
    ellipse(this.x+420, this.y+350, 50, 50);
    ellipse(this.x+350, this.y+350, 50, 50);
  }
}
