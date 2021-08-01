var iss, issImg;
var spacecraft , spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var spaceImg;
var hasDocked = false;
var point;

function preload(){
  issImg = loadImage("iss.png");

  spacecraft1Img = loadImage("spacecraft1.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");

  spaceImg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(1200,750);

  point = createSprite(508,383,40,40);
  
  spacecraft = createSprite(500,600,10,10);
  spacecraft.setCollider("circle",-1,-140,98);

  iss = createSprite(600,356,20,20);
  iss.addImage(issImg);
  iss.scale = 1.4;
  
}

function draw() {
  background(spaceImg);
  
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.3;

  if(!hasDocked){
    spacecraft.x = Math.round(random(spacecraft.x-2,spacecraft.x+2));

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x = spacecraft.x-3;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x = spacecraft.x+3;
    }

    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.y = spacecraft.y-3;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2Img);
    }
  }
  if(spacecraft.isTouching(point)){
    fill("white");
    textSize(32);
    stroke("blue")
    text("Docking Successful!",400,135);
    hasDocked = true;
  }

  drawSprites();
}