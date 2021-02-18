var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  block1 = createSprite(0,580,360,30);
  block1.shapeColor = rgb(0,22,325);

  block2 = createSprite(295,580,200,30);
  block2.shapeColor = rgb(225,22,30);

  block3 = createSprite(515,580,200,30);
  block3.shapeColor = rgb(153,0,76);

  block4 = createSprite(740,580,220,30);
  block4.shapeColor = rgb(40,100,20);

  ball = createSprite(random(20,750),100,40,40);
  ball.shapeColor = rgb(225,225,225);
  ball.velocityX = 4;
  ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

if(block1.isTouching(ball) && ball.bounceOff(block1)){
    ball.shapeColor = rgb(0,22,325);
    music.play();
}

if(block2.isTouching(ball)){
ball.shapeColor = rgb(225,22,30);
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();
}

if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = rgb(153,0,76);
}

if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = rgb(40,100,20);
    music.play();
}

    block1.display();
    block2.display();
    block3.display();
    block4.display();

drawSprites();
}
