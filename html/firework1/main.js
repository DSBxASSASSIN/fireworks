const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let firework = new Firework(getRandom(ctx.canvas.width), ctx.canvas.height);
let gravity = new Vector2d(0, 0.08);

function draw(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    firework.applyForce(gravity);
    firework.update();
    firework.show(ctx);
    requestAnimationFrame(draw);
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

draw();