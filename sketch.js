//Create variables here
var dog,happyDog,database,foodS,foodStock,Doggy,database
function preload()
{
  //load images here
 dog=loadImage("Dog.png");
 happyDog=loadImage("happydog.png");
}

function setup() {
  database =firebase.database();
  createCanvas(500, 500);
  Doggy = createSprite(200,200);
  Doggy.addImage(dog);
  foodStock=database.ref('Food');
  foodStock.om("value",readStock);
}


function draw() {  
background(46,139,87);
  
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  

}
drawSprites();
text("Bottles"+ foodStock,480,300);
}



function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-l
}
database.ref('/').update({
  food:x
})
}
function readStock(data){
  foodS=data.val();
}