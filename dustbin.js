class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(myworld,this.body)
        this.width=width
        this.height=height
        this.image=loadImage("dustbin.png")
    }
    display(){
       
     push()
     translate(this.body.position.x,this.body.position.y)
     angleMode(RADIANS)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}