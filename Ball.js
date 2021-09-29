class Ball{
    constructor(x,y,w,h){
        var options = {
            density: 1,
            frictionAir: 0.005,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=50;
        this.h=50;
        this.image = loadImage("polygon.png");
        World.add(world, this.body)
    }  

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        ellipse(0,0, this.w, this.h)
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop()
    }

}