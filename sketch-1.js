//Global Variables
var banana, banana_image, obstacle, obstacle_image;
var score, monkey, monkey_image, back_image;
var gameOver, gameOver_image;
var restart, restart_image;
var ground, ground_image, background1;
var fruitGroup, obstacleGroup;
function preload(){
  back_image = loadImage("jungle.jpg");
  
  //gameOver_image = loadImage("gameOver.png");
  
  monkey_image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  banana_image = loadImage("banana.png");
  //restart_image = loadImage("restart.png");
  //ground_image = loadImage("ground.jpg");
  obstacle_image = loadImage("stone.png")
}
function setup() {
  createCanvas(600,300);
  background1 = createSprite(0, 0, 600, 300)
  background1.addAnimation("jungle", back_image);
  background1.x = background1.width/2;
  background1.scale = 1.5
  background1.velocityX = -3;
  
  monkey = createSprite(50,260,20,20);
  monkey.addAnimation("monkey", monkey_image);
  monkey.scale =0.1;
  //obstacle = createSprite(300, 150, 20, 20);
  //obstacle.addAnimation("obstacle", obstacle_image);
  
 
  ground = createSprite(300, 290, 600, 10);
  ground.visible = false;
  fruitGroup = new Group()
  obstaclesGroup = new Group()
  score = 0 
}
function draw(){
 background(255);
 
  
  if(background1.x<0){
    background1.x = background1.width/2;
  }
  if(monkey.isTouching(fruitGroup)){
     score  =score+2
     fruitGroup.destroyEach();
     }
  if(obstaclesGroup.isTouching(monkey)){
     monkey.scale = 0.2
     }
  //console.log(monkey.y)
  if(keyDown("space")&&monkey.y <= 260){
   monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY+0.8
  switch(score){
   case 10: monkey.scale = 0.12
            break
   case 20: monkey.scale = 0.14
            break
   case 30: monkey.scale = 0.16   
            break
   case 40: monkey.scale = 0.18
            break
   default:break         
  }
  spawnFruits()
  spawnObstacles()
  
  monkey.collide(ground);
  drawSprites();
  text("Score:" + score, 500, 50);
  }
function spawnFruits(){
 if(frameCount % 80 === 0){
 banana = createSprite(600, 250, 40, 10)
 banana.addImage(banana_image)
 banana.scale = 0.04
banana.y = Math.round(random(200,250))
   banana.velocityX = -3
   banana.lifetime = 200
   fruitGroup.add(banana)
 }
}
function spawnObstacles(){
 if(frameCount % 80 === 0){
 obstacle = createSprite(600, 280, 40, 10)
 obstacle.addImage(obstacle_image)
 obstacle.scale = 0.08
   obstacle.velocityX = -3
   obstacle.lifetime = 200
   obstaclesGroup.add(obstacle)
 }
}