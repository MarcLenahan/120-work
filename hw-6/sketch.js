

//Initial setup of canvas
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(200);
  frameRate(30);

}

//creating all the variavles and objects used in assignment
var x,y;

var color1, color2, color3;

var width;
var height

var x2,y2;

var x3,y3;

var pow;

var ellipse2 = {};
ellipse2.size1 = 20;
ellipse2.size2 = 50;

//initial draw function
function draw(){
  x = windowWidth/2;
  y = windowHeight/2;

//all the random functions
  pow = random(0,10);

  x3 = random(0, windowWidth);
  y3 = random(0, windowHeight);

  x = random(0, windowWidth);
  y = random(0, windowHeight);

  color1 = random(0, 255);
  color2 = random(0, 255);
  color3 = random(0, 255);

  x2 = sq(random(0,50));
  y2 = sq(random(0,50));



  rect(x2, y2, 50,50);

  fill(0,50,color3);
  ellipse(x,y, 20, 20);


   ellipse(x3,y3,ellipse2.size1,ellipse2.size2);




}
