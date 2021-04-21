

function setup() {
  createCanvas(1200,800);

 movingRect=createSprite(400, 200, 80, 30);
 movingRect.shapeColor="Blue";

 movingRect.debug=true;

fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor="Blue";

fixedRect.debug=true;
}

function draw() {
  background(0);

  console.log(movingRect.x-fixedRect.x);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2  ){
  movingRect.shapeColor="Yellow";
  fixedRect.shapeColor="Yellow";
  }
  else{
    fixedRect.shapeColor="Blue";
    movingRect.shapeColor="Blue"; 
  }


  drawSprites();
}