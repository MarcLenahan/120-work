function setup() {
  // intial setup of canvas
  createCanvas(800,800);
}

function draw() {
  background(200);
  translate(400,350);


// This is the head
  push();
  fill('rgb(246, 235, 160)')
  noStroke();
  ellipse(0,0,150,150);
  pop();


// The face is here
  push();
  fill('white');
  ellipse(-20,-10,35,35); //left eye

// still part of the left eye
  push();
  stroke('black');
  strokeWeight(20);
  point(-20,-10);
  pop();


  ellipse(20,-10,35,35);  //right eye

// this is still part of the right eye
  push();
  stroke('black');
  strokeWeight(20);
  point(20,-10);
  pop();

// Hair has been made
  push();
  noStroke();
  fill('rgb(103, 66, 9)');
  arc(0,-50,180,180,PI,0);
  pop();

// making the mouth
  push();
  fill(200);
  rect(-12,25,25,10);
  fill(255);
  triangle(5,26,14,26,10,35);
  triangle(-3,26,-10,26,-7,35)
  pop();
  pop();

// This is the left arm
  push();
  rotate(radians(15));
  rect(-70,100,25,170,45,0,0);
  pop();

// This is the right arm
  push();
  rotate(radians(-15));
  fill('rgb(101, 182, 44)');
  rect(45,100,25,170,0,45,0);
  pop();

// This is the body
  push();
  fill('blue');
  rect(-75,75,150,175,10,10,0);
  noFill();
  rect(15,100,40,50);
  rect(15,100,40,10);
  pop();





// This is the left leg
  push();
  fill('rgb(156, 89, 146)');
  rect(-75,250,50,150);
  pop();

//This is the right leg
  push();
  fill('rgb(201, 82, 50)');
  rect(25,250,50,150);
  pop();



  /*push();
  // center canvas
    // translate(400,400);

    push();
    // Body

    rect(-100,0,180,200);

    pop();

    push();
    // Arms
    fill(50);
    rect(95,0,30,200);
    rect(-95,0,30,200);

    pop();

    push();
      // Head

      ellipse(0,-75,150);
      push();
      // Mouth

      pop();

      push();
        // Eyes

      pop();

    pop();

  pop();






  pop();
  */
}
