let blocks = [];
let player;
let numOfBlocks = 1;
let numOfBlocksDest = 0;
let numOfBlocksMiss = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);

  player = new Player(10);

  for(let i = 0; i < numOfBlocks; i++){
    let x = width;
    let y = random(height);
    let w = random(10);
    let h = random(25,50);
    blocks[i] = new Block(x, y, w, h);
  }

}

function draw(){
  noCursor();
  background(150);

  player.update();
  player.show();
  player.touch();
  for(let i = blocks.length - 1; i >= 0; i--){
    blocks[i].show();
    blocks[i].move();
    if(blocks[i].done()){
      blocks.splice(i,1);
      numOfBlocksMiss++;

    }

  }

  while(blocks.length < numOfBlocks){
      let x = width;
      let y = random(height);
      let w = random(10);
      let h = random(25,50);
      blocks.push(new Block(x, y, w, h));
  }

  push();
  stroke(0)
  fill(255);
  rect(0,0, 250, 50);
  fill(0);
  text("Score: " + numOfBlocksDest, 0, 10);
  text("Blocks Missed: " + numOfBlocksMiss, 0, 20);
  pop();

}

class Block{
  constructor(x, y, w, h){
    this.x = x;
    this.x_delta = random(-2, 0);
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show(){
    fill(0, 0, random(255));
    rectMode(CENTER)
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
  constructor(r){
    this.x = mouseX;
    this.y = mouseY;
    this.r = r;
  }

  update(){
    this.x = mouseX;
    this.y = mouseY;
  }

  show(){
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }

  touch(){
    for(let i = blocks.length - 1; i >= 0; i-- ){
      let d = dist(this.x, this.y, blocks[i].x, blocks[i].y);
      let thresh = this.r + max([blocks[i].w, blocks[i].h])/2;
      if(d < thresh){
        blocks.splice(i,1);
        numOfBlocks++;
        numOfBlocksDest++;
        if(numOfBlocksDest >= 100){
          blocks[i].x_delta = random(-4,0);
        } else if(numOfBlocksDest > 200){
          blocks[i].x_delta = random(-6,0);
        }
      }

    }
  }


}
