
var backgroundImg;
var manStand, manRun, manImage, manAnimation;
var enemy1 , enemy2 , enemy3 , enemy4 , enemy5 , enemy6 , enemy7 , enemy8 , enemy9 , enemy10 
, enemy11 , enemy12 , enemy13 , enemy14 , enemy15 , enemy16 , enemy17 , enemy18 , enemy19 , enemy20 ;
var sShip, sShipImg;
var bullet , bullet2 , bulletImg  , bulletImg2 ;

var wall1 , wall2 ;

var factory1, factory1Img;
var factory2, factory2Img;
var factory3, factory3Img;
var factory4, factory4Img;
var factory5, factory5Img;
var factory6, factory6Img;

var bulletGroup ;
var cover, coverImg;
var enemy;


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!        PRELOAD           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function preload() {

  // loaded images
  backgroundImg = loadImage("assets/b-g.jpg");
  factory1Img = loadImage("assets/factory 1.png");
  factory2Img = loadImage("assets/factory 2.png");
  factory3Img = loadImage("assets/factory 3.png");
  factory4Img = loadImage("assets/factory 4.png");
  factory5Img = loadImage("assets/factory 5.png");
  factory6Img = loadImage("assets/factory 6.png");

  coverImg = loadImage("assets/sack.png");

  manImage = loadAnimation("assets/p5.png");
  manAnimation = loadAnimation("assets/p2.png", "assets/p3.png", "assets/p4.png");
  enemyImg = loadImage(  "assets/enemy.png" );  //, "assets/enemy.png" , "assets/enemy-.png" ,  "assets/enemy-.png" )
  bulletImg = loadImage("assets/bullet.png");
  bulletImg2 = loadImage("assets/bullet-.png");
  spaceShipImg=loadImage("assets/spaceship.png");

}
function setup() {


  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };

  //  MAN SPRITE
  manStand = createSprite(250, 500, 60, 60);
  manStand.addAnimation("man", manImage);
  manStand.scale = 3;
  manStand.addAnimation("man2", manAnimation);

  enemy1 = createSprite(1250 , 500 , 60 , 60);
  enemy1.addImage(enemyImg);
  enemy1.scale = 3;
  enemy1.velocityX = -4

  enemy2 = createSprite(1250 , 500 , 60 , 60);
  enemy2.addImage(enemyImg);
  enemy2.scale = 3;
  enemy2.velocityX = -3

  enemy3 = createSprite(1250 , 500 , 60 , 60);
  enemy3.addImage(enemyImg);
  enemy3.scale = 3;
  enemy3.velocityX = -2

  enemy4 = createSprite(1250 , 500 , 60 , 60);
  enemy4.addImage("enemy",enemyImg);
  //enemy4.addImage(spaceShipImg);
  enemy4.scale = 3;
  enemy4.velocityX = -1

  

  bulletGroup=createGroup()

}


function draw() {
  background(backgroundImg);
 

  //   moving right to the player
  if (keyWentDown(RIGHT_ARROW)) {
    manStand.changeAnimation("man2", manAnimation);
    manStand.x += 2;
    manStand.velocityX=2;
  }
  if (keyWentUp(RIGHT_ARROW)) {
    manStand.changeAnimation("man", manImage)
    manStand.velocityX=0
  }
  /*if (keyDown(RIGHT_ARROW)) {
    manStand.changeAnimation("man", manImage);
    manStand.velocityX = 0;
  };

//   moving left to the player
  //if (keyDown(LEFT_ARROW)) {
    manStand.changeAnimation("man2", manAnimation);
    manStand.velocityX = -5;
  };
  if (keyDown(LEFT_ARROW)) {
    manStand.changeAnimation("man", manImage);
    manStand.velocityX = 0;
  };*/

    if(keyDown('space')){
      spawnBullet();

    }

    

    if(bulletGroup.isTouching(enemy1)){
      enemy1.destroy();
      bulletGroup.destroyEach();
    }   
    if(bulletGroup.isTouching(enemy2)){
      enemy2.destroy();
      bulletGroup.destroyEach();
    }   
    if(bulletGroup.isTouching(enemy3)){
      enemy3.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy4)){
      enemy4.addImage("enemy",spaceShipImg)
      enemy4.scale=0.8;
      //comment the below line if you want to keep moving 
      enemy4.velocityX=0
      bulletGroup.destroyEach();

    }     

    



  drawSprites();

}





function spawnBullet(){
  bullet = createSprite(310 , 520 , 60 , 60);
  bullet.addImage(bulletImg);
  bullet.scale = 0.03;
  bullet.velocityX = 40;
  bullet.lifetime = 50;
  bullet.x = manStand.x ;
  bulletGroup.add(bullet)
 
}



