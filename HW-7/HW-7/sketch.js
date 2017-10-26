

var ball = {};
ball.width = 60;
ball.height = 30;
ball.x = 5;
ball.y = 5;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}

var col1, col2, col3;

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    //adding color to the mix.
    col1 = random(0,250);
    col2 = random(0,250);
    col3 = random(0,250);

    fill(col1,col2,col3);
    ellipse(ball.x, ball.y, ball.width, ball.height);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 15);
    ball.scale_y = map(mouseY, 0, height, 0.5, 15);
}
