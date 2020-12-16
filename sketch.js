var fixedrect;
var movingrect;
var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
fixedrect=createSprite(100,100,25,50);
movingrect=createSprite(300,250,50,25);
rect1 = createSprite(500,100,50,100);
rect2=createSprite(200,200,60,30);
fixedrect.shapeColor="green";
movingrect.shapeColor="green";
rect1.shapeColor ="green";
rect2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTouching(movingrect,rect2)){
    movingrect.shapeColor="red";
  rect2.shapeColor="red";
  
  }
  else{
    movingrect.shapeColor="green";
    rect2.shapeColor="green";
  
  }
  
drawSprites()
}
function isTouching(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2&&
    o2.x-o1.x<o1.width/2+o2.width/2&&
    o1.y-o2.y<o1.height/2+o2.height/2&&
    o2.y-o1.y<o1.height/2+o2.height/2){
      return true;
   }
  else{
    return false;
    }

}

