function setup(){

  createCanvas(windowWidth, windowHeight);
  frameRate(5);

}

function draw(){
background(0);
strokeWeight(4);
stroke(255);

// var x = 0;
// while(x <= width){
//   fill(0,200,255)
//   ellipse(x, 100, 25, 25);
//   x = x + 50;
// }
var col3 = random(255);
for(var x = 0; x <= width; x = x + 50){
  for(var y = 0;  y <= height; y = y + 50){
  fill(255,0,col3);
  ellipse(x, y, 25, 25);
    // for(var y = 0; y < height; y + 50){
    //   ellipse(x, y, 25, 25);
    // }
}
}



}

// x = width/2;
// y = height/2;
//
//
// stroke(0);
// noFill();
//
// ellipse(x,y, 25,125);
//
// ellipse(x,y,125,25);
//

// let pos_x = 0;
// let pos_y = 0;
// let d = 30;
// let r = d/2;
// var angle = 0;
// var value = 0;
// function draw(){
// background( 'rgb(3, 78, 115)');
//
//
// rotate(radians(angle));
// for( var i = 0; i < 10; i++){
//
//   pos_x = width * i/10 + r;
// translate(width*.055, height*.15);
//
// noStroke();
// fill(value);
// ellipse(pos_x,pos_y,150,50);
// ellipse(pos_x,pos_y,50,150);
// //angle = angle + 45/2;
// }
// angle = angle + 45/2;
// // fill(255);
// // noStroke();
// //
// // for( var i = 5; i < 25; i++){
// //   pos_x = width * i/10 + r;
// //   ellipse(pos_x, pos_y, d);
// // }
// // pos_y++;
// // if(pos_y > height){
// //   pos_y = 0;
// // }
// // for( var i = 0; i < 10; i++){
// //   pos_y = height * i/10 + r;
// //   ellipse(pos_x, pos_y, d);
// // }
// // pos_x++;
// // if(pos_y > height){
// //   pos_y = 0;
//
//

// }
// function mousePressed(){
//   noLoop();
// }
//
// function mouseReleased(){
//   loop();
// }
