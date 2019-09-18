class Firework{
    constructor(position, radius, r, g, b){
        this.position = position;
        this.radius = radius;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    get color(){
        return "rgba(" + this.r + "," + this.g + "," + this.b + ")";
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.dx, this.position.dy, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}