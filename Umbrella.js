class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.batmanImg = loadImage("bat/Bestman-01.png");
        World.add(world, this.body);
        
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        
        if(frameCount >= 150){
            image(this.batmanImg,pos.x,pos.y+70,200,300);
            }
            else
                image(this.image,pos.x,pos.y+70,300,300);
            
}
     
}
