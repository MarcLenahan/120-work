function setup()
{
  createCanvas(windowWidth, windowHeight);
// Setting up frame rate to slow down transitions
  frameRate(5);
}

function draw()
{
  background(0);
  strokeWeight(8);
// Adding more color to the mix
  stroke(random(255));
// This translation helps create the pattern effect
  translate(width/2,height/2);
// Here is where I establish the random color variables
  var col1 = random(255);
  var col2 = random(255);
  var col3 = random(255);
// First for loop to creat the grid
  for(let x = 0; x <= width; x = x + 50)
  {
// Second loop to complete grid
    for(let y = 0;  y <= height; y = y + 50)
    {
// using the random colors to add craziness
      fill(col1,col2,col3);
// This rotation creates the pattern
      rotate(radians(frameCount));
      rectMode(CENTER);
      rect(x, y, 25, 25);
      x = x+=3;
      y = y+=3;
    }
  }
}
// Functions to pause the sketch by clicking mouse.
function mousePressed()
{
  noLoop();
}

function mouseReleased()
{
  loop();
}
