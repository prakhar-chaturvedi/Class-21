var fixed,moving;
var o1,o2,o3,o3;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving= createSprite(200,300,100,20);
  moving.shapeColor="teal";
  o1=createSprite(100,100,10,60);
  o1.velocityY=5;
  o2=createSprite(100,500,10,60);
  o2.velocityY=-5;

  o3=createSprite(200,300,10,60);
  o3.velocityX=5;
  o4=createSprite(800,300,10,60);
  o4.velocityX=-5;
}

function draw() {
  background(0);  



  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(isTouching(fixed,moving)){
     fixed.shapeColor="green";
    moving.shapeColor="cyan";
  }
  else{
  fixed.shapeColor="red";
  moving.shapeColor="teal";
}

bounceOff(o1,o2);
bounceOff(o3,o4);




  drawSprites();
}


function isTouching(object1,object2){

if (object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2)
    {
     return true; 
    }
 else 
 { return false;}


}

 function bounceOff(ob1,ob2){

 if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
     ob2.x-ob1.x<ob2.width/2+ob1.width/2)
{
  ob1.velocityX=ob1.velocityX*(-1);
  ob2.velocityX=ob2.velocityX*(-1);
}

if(ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
    ob2.y-ob1.y<ob2.height/2+ob1.height/2)
 {
   ob1.velocityY=ob1.velocityY*(-1);
   ob2.velocityY=ob2.velocityY*(-1);
 }

 } 



