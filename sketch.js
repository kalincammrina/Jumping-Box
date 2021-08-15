var canvas, surface1, surface2, surface3, surface4, box, rightwall, leftwall, topwall;
var music;

 function preload(){
  music = loadSound("music.mp3");
}

 function setup(){
  canvas = createCanvas(800,600);
   surface1 = createSprite(80,595,200,30);
   surface1.shapeColor = "blue";

   surface2 = createSprite(290,595,200,30);
   surface2.shapeColor = "orange";

   surface3 = createSprite(500,595,200,30);
   surface3.shapeColor = "green";
   
   surface4 = createSprite(710,595,200,30);
   surface4.shapeColor = "pink";

   box = createSprite(random(20,750),10,25,25);
   box.shapeColor = "white";
   
   rightwall = createSprite(800,0,10,1160);
   rightwall.shapeColor = rgb(169,169,169);

   leftwall = createSprite(0,0,10,1160);
   leftwall.shapeColor = rgb(169,169,169);

   topwall = createSprite(10,0,1600,10);
   topwall.shapeColor = rgb(169,169,169);

   box.velocityX = 5;
   box.velocityY = 5;

   box.bounceOff(surface3);
 }

 function draw() {
  createEdgeSprites();
  box.bounceOff(rightwall);
  box.bounceOff(leftwall);
  box.bounceOff(topwall);
  
  background(rgb(169,169,169));
  
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
   box.shapeColor = "blue";

   } if(surface2.isTouching(box) && box.bounceOff(surface2)){
   box.shapeColor = "orange";
   music.play();

  } if(surface4.isTouching(box) && box.bounceOff(surface4)){ 
   box.shapeColor = "pink";

  } if(surface3.isTouching(box)) {  
  box.shapeColor = "green";
  box.velocityX = 0;
  box.velocityY = 0;
  
  music.stop();
  }
 drawSprites();
}
