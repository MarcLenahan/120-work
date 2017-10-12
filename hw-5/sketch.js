
// Initial Setup
function setup(){
  createCanvas(windowWidth, windowHeight);

  // Controlling framerate
  frameRate(2.5);

}

//Creating all the variables for individual rotation
var angle = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;
var angle6 = 0;
var angle7 = 0;
var angle8 = 0;
var angle9 = 0;
var angle10 = 0;
var angle11 = 0;
var angle12 = 0;
var angle13 = 0;
var angle14 = 0;
var angle15 = 0;
var angle16 = 0;
var angle17 = 0;
var angle18 = 0;

// Creating color variale values
var value = 0;
var value1 = 0;

//Draw loop
function draw(){
  background('yellow');


//first star, each one goes up and down
push();
  translate(width*.055, height*.15);
  rotate(radians(angle));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle = angle + 45/2;
pop();



push();
  translate(width*.165, height*.385);
  rotate(radians(angle2));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle2 = angle2 + 45;
pop();

push();
  translate(width*.275, height*.15);
  rotate(radians(angle3));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle3 = angle3 + 45/2;
pop();

push();
  translate(width*.385, height*.385);
  rotate(radians(angle4));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle4 = angle4 + 45;
pop();

push();
  translate(width*.495, height*.15);
  rotate(radians(angle5));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle5 = angle5 + 45/2;
pop();

push();
  translate(width*.605, height*.385);
  rotate(radians(angle6));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle6 = angle6 + 45;
pop();

push();
  translate(width*.715, height*.15);
  rotate(radians(angle7));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle7 = angle7 + 45/2;
pop();

push();
  translate(width*.825, height*.385);
  rotate(radians(angle8));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle8 = angle8 + 45;
pop();

push();
  translate(width*.935, height*.15);
  rotate(radians(angle9));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle9 = angle9 + 45/2;
pop();

push();
  translate(width*.055, height*.62);
  rotate(radians(angle10));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle10 = angle10 + 45/2;
pop();

push();
  translate(width*.165, height*.855);
  rotate(radians(angle11));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle11 = angle11 + 45;
pop();

push();
  translate(width*.275, height*.62);
  rotate(radians(angle12));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle12 = angle12 + 45/2;
pop();

push();
  translate(width*.385, height*.855);
  rotate(radians(angle13));
  noStroke();
  fill(value);
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle13 = angle13 + 45;
pop();

push();
  translate(width*.495, height*.62);
  rotate(radians(angle14));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle14 = angle14 + 45/2;
pop();

push();
  translate(width*.605, height*.855);
  rotate(radians(angle15));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle15 = angle15 + 45;
pop();

push();
  translate(width*.715, height*.62);
  rotate(radians(angle16));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle16 = angle16 + 45/2;
pop();

push();
  translate(width*.825, height*.855);
  rotate(radians(angle17));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle17 = angle17 + 45;
pop();

push();
  translate(width*.935, height*.62);
  rotate(radians(angle18));
  ellipse(0,0,150,50);
  ellipse(0,0,50,150);
  angle18 = angle18 + 45/2;
pop();


}

// Mouse click function to change the color of half the stars
function mousePressed() {
  if (value == 0 && mouseX < width/2) {
    value = 255;
  }else {
    value = 0;
  }

}
