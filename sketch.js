var box;
var box1;

function setup() {
  createCanvas(1000,1000);
  box = createSprite(300, 300, 100, 100)
  for(var I = 1; I <= 10; I++){
    console.log(I);
  }
}

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
  box.position.y = box.position.y - 1
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x - 1
}
if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x + 1
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y + 1
}
drawSprites();
}



