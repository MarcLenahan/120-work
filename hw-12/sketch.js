let bubbles = [];

function setup() {
    createCanvas(windowWidth, 600);
    let b = new Bubble(width / 2, height / 2, 10);
    bubbles.push(b);
    bubbleTimer();
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

function bubbleTimer() {
    let b = new Bubble(random(width), random(height), random(200));
    bubbles.push(b);
    // this has the effect of calling itself every x-milliseconds
    setTimeout(bubbleTimer, random(2000));
}


function mousePressed() {
    // make the bubbles check themselves
    // to see if the mouse is within them.
    for (let i = bubbles.length - 1; i >= 0; i--) {
        let destroyMe = bubbles[i].mouseCheck();
        if (destroyMe) {
            bubbles.splice(i, 1);
        }
    }
}
