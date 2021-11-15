var objeto1
var objeto2


function setup() {
  createCanvas(800,400);
  objeto1=createSprite(400,200,80,80)
  objeto1.shapeColor="Red"
  objeto2=createSprite(400,400,80,80)
  objeto2.shapeColor="Blue"
 
}

function draw() {
  background(255,255,255);  
 objeto1.x=World.mouseX
 objeto1.y=World.mouseY
 if(objeto1.x - objeto2.x < objeto1.width/2 + 
  objeto2.width/2 && objeto2.x - objeto1.x < objeto1.width/2 +
  objeto2.width/2 && objeto1.y - objeto2.y < objeto1.height/2 +
  objeto2.height/2 && objeto2.y - objeto1.y < objeto1.height/2 +
  objeto2.height/2) {
    objeto1.shapeColor="Green"
    objeto2.shapeColor="Green"
  }
  
  else{objeto1.shapeColor="Red"
objeto2.shapeColor="Blue"}
 
  drawSprites();
}