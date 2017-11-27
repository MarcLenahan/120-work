//My rain array
let raining = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  //adding the rain drops to the array
  for(let i = 0; i < 1000; i++){
    let w = random(width);
    let h = random(height);
    raining[i] = new Rain(w, h, 3,8);
  }

}


function draw(){
  //thunder element can be added by setting background to random(255)
  background(0);
  for(let i = 0; i < raining.length; i++){
    raining[i].move();
    raining[i].display();
  }

}


class Rain{
// this creates the shapes of the rain drops
  constructor(posX, posY, w, h){
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
  }

//this is whay resets and sets the generator
  move(){
    this.posY = this.posY += 1;
    if(this.posY > height){
      this.posY = 0;
    }
  }

//this is what controls the color of the rain drops
  display(){
    let blu = random(255);
    fill(0,0, blu);
    ellipse(this.posX, this.posY, this.w, this.h);
  }
}
