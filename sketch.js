var robot,robotImage;
var ground;
var background1,backgroundImage;

function preload(){
 robotImage = loadAnimation("sprites/rob1.png","sprites/rob2.png");
 backgroundImage = loadImage("sprites/background.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  background1= new Ground(displayWidth/2,displayHeight/2,displayWidth.displayHeight);
  background1.body.addImage("backgroungImg",backgroundImage);
  robot = new Player(50,displayHeight-80,80,40);
  robot.body.addAnimation("robImg",robotImage);
  robot.body.scale= 0.5;
  ground = new Ground(displayWidth/2,displayHeight-30,displayWidth,20);
  
}

function draw() {
  background(255,255,255);
 
  
  drawSprites();
}
