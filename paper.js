class Paper{
constructor(x,y,radius){
    var options = {
       
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options)
    World.add(myworld,this.body)
    this.image=loadImage("paper.png")
  
    this.radius=radius

}
display(){
var pos=this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
 image(this.image,0,0,this.radius,this.radius)
    pop()
  
  }
}