var a,b;

function setup(){
  createCanvas(600,400);

  a= createSprite(300,200,50,50);
  a.shapeColor = "yellow";

  b=createSprite(100,200,30,50);
  a.shapeColor = "yellow";

  a.velocityX = -1;
  b.velocityX = 1;

}
function draw(){
background("lightblue");

bounceOff(a,b);

drawSprites();


}
