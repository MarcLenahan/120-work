let blocks = [];

function setup(){
  createCanvas(500, 500);
  for(let i = 0; i < 10; i++){
    let x = width;
    let y = random(height);
    let w = random(10);
    let h = random(50);
    blocks[i] = new Block(x, y, w, h);
  }
}

function draw(){
  background(150);

  for(let i = blocks.length - 1; i >= 0; i--){
    blocks[i].show();
    blocks[i].move();
    if(blocks[i].done()){
      blocks.splice(i,1);
      let x = width;
      let y = random(height);
      let w = random(10);
      let h = random(50);
      blocks.push(new Block(x, y, w, h));
    }

  }
}

class Block{
  constructor(x, y, w, h){
    this.x = x;
    this.x_delta = random(-10, 0);
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show(){
    rect(this.x, this.y, this.w, this.h);
  }

  move(){
    this.x += this.x_delta;

  }

  done(){
    if(this.x < 0){
      return true;
    }else {
      return false;
    }
  }
}


class Player{
  
}
