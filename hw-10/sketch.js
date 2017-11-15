
// array to hold values for the x postion of the ecllipse
let blink = [];

function setup(){
  frameRate(15);
  createCanvas(windowWidth,windowHeight);
  noStroke();
  for (var i = 0; i < 3000; i++){
    let start = startNum(100);
    blink[i] = random(-3000,start);
  }

}


function draw(){

background(0);
for (var i = 0; i < blink.length; i++){
  let col1 = rainbow(255);
  let col2 = rainbow(255);
  let col3 = rainbow(255);


  fill(col1, col2, col3,200);
  blink[i] += 0.5;
  let y_pos = i * 0.4;
  ellipse(blink[i], y_pos, 20, 20);
}
}

// function for creating start point for the moving ellipses.
function startNum(start){
  let d = start;
  return d;
}
//function to help with color
function rainbow(color){
  let c = random(color);
  return c;
}
