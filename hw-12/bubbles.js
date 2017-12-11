
///////////////////////////////////////////////////
// Bubble Class
///////////////////////////////////////////////////
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }

    // check if the mouse if within this bubble
    mouseCheck() {
        // get the distance between the mouse and the center of the bubble
        let d = dist(this.x, this.y, mouseX, mouseY);
        // check if that distance is less than the bubble radius
        // if it is, then the mouse if within
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}
