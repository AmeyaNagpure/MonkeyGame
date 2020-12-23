
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,450)
  
  monkey=createSprite(60,300)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.13
  
  ground=createSprite(275,395,550,120)
  ground.shapeColor="green"
  
  banana=createSprite(400,215)
  banana.addImage("banana_image",bananaImage)
  banana.scale=0.13
  
  obstacle=createSprite(220,310)
  obstacle.addImage("obstacleImage",obstacleImage)
  obstacle.scale=0.13
  
}


function draw() {
  background("lightBlue")
  
  monkey.collide(ground);
  
  
  drawSprites();
}