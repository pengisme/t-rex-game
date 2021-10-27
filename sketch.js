
var trex ,trex_running,ground,groundimg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimg=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 edges=createEdgeSprites();
 trex.scale=0.5;
 trex.x=50;
 ground=createSprite(200,180,400,20);
 ground.addAnimation("ground",groundimg);
 ground.x=ground.width/2;
}

function draw(){
  //setbackground white
  background("white")
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //jump when space key is pressed
console.log(trex.y);
  if(keyDown("space")){
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();

}
