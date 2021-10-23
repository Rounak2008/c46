var bird,birdImg;
var backgroundImg;
var bg;
var ob1,ob2,ob3,ob4,ob5,ob6
var ob7,ob8,ob9,ob10,ob11,ob12,ob13

function preload(){
  backgroundImg=loadImage("background 1.png");
  birdImg=loadImage("bird.png");
  ob1Img=loadImage("ob1.png");
  ob2Img=loadImage("ob2.png");
  ob3Img=loadImage("ob3.png");
  ob4Img=loadImage("ob4.png");
  ob5Img=loadImage("ob5.png");
  ob6Img=loadImage("ob6.png");
  ob7Img=loadImage("ob7.png");
  ob8Img=loadImage("ob8.png");
  ob9Img=loadImage("ob9.png");
  ob10Img=loadImage("ob10.png");
  ob11Img=loadImage("ob11.png");
  ob12Img=loadImage("ob12.png");
  ob13Img=loadImage("ob13.png");
}

function setup() {
  createCanvas(1500,700);
  bg=createSprite(750,350)
  bg.addImage(backgroundImg); 
  bg.scale=1.0;

  bird = createSprite(150,200);
  bird.addImage(birdImg);
  bird.scale=0.3;
 
 
}

function draw() {
  background(0);
  bg.velocityX=-5;

  if (bg.x <bg.width/3 ){   
  bg.x=bg.width; 
}
if(keyDown("space")){
  bird.velocityY=-10;
}
bird.velocityY = bird.velocityY  + 0.5

spawnObstacles();
drawSprites();
}  
function spawnObstacles() {
  //Code to spawn the obstacles
  if (frameCount % 60 === 0) {
    var ob1 = createSprite(600,120,40,10);
    ob1.addImage(ob1Img);
    ob1.scale = 0.5;
    ob1.velocityX = -3;
  }}