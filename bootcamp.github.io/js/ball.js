var canvas = document.getElementById("myCanvas");

class Ball {
    //create ball
    constructor(radius, id_tag, speed, color) {
        this.canvas = document.getElementById(id_tag);
        this.ctx = this.canvas.getContext("2d");
        this.x = this.ctx.width / 2;
        this.y = this.ctx.height - 30;

        this.radius = radius;

        this.dx = speed;
        this.dy = -speed;

        this.color = color;
    }
    //draw ball;
    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    //update ball position
    update() {
        //draw the canvas rectangle
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //draw the ball
        this.drawBall();
        //update x velocity direction
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        //update y velocity direction
        if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        //update x position based on velocity
        this.x += this.dx;
        //update y position based on velocity
        this.y += this.dy;
    }
}

const green_ball = new Ball(10, "myCanvas", 1, "#0095DD");

setInterval(green_ball.update, 10);
