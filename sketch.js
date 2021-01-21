
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myengine,myworld
var  bound
var paper
function preload()
{

}
function setup() {
	createCanvas(800, 700);

  myengine=Engine.create();
  myworld=myengine.world

  ground=new Ground(400,700,800,10)
  paper=new Paper(200,690,45)

  dustbin=new Dustbin(650,600,200,200)

}
function draw() {
  background("yellow");
  Engine.update(myengine)
 
 ground.display();
 paper.display();
 dustbin.display()
 

}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}



