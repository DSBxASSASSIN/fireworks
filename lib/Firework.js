class Firework{
    constructor(x, y){
        this.pos = new Vector2d(x,y);
        this.vel = new Vector2d(0,-40);
        this.acc = new Vector2d(0,0);
    }

    applyForce(force){
        this.acc.x += force.x;
        this.acc.y += force.y;
    }

    update(){
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.acc.x * 0;
        this.acc.y * 0; 
    }

    show(ctx){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255)";
        ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    
}