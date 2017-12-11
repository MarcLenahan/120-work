

function setup(){
  createCanvas(500,500);


  ball = new Ball(250,250);
}

function draw(){
  background(150);
  ball.move();
  ball.display();
}




class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.x_delta = 0;
    this.y_delta = 0;
    this.r = 10;
  }

  display(){
    rect(this.x,this.y, this.r,this.r);
  }

  move(){
    this.x_delta = this.x += -1;
    if(this.x_delta < 0){
    this.x = width;
  }
  }
}
