var bullet, wall, speed, weight, damage, thickness, soldier, soldierimg, solier_back, soldier_back_img, car, carimg;
var tree, treeimg;

function preload(){
  soldierimg = loadImage("soldier.png");
  soldierbackimg = loadImage("soldier_back.png");
  carimg = loadImage("car.png");
  treeimg = loadImage("tree.png");
}

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);

  bullet = createSprite(170, 196, 18, 7);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80)
  
  car = createSprite(130,350,10,10);
  car.addImage("car", carimg);

  soldier = createSprite(250,200,10,10);
  soldier.addImage("soldier", soldierimg);

  soldier_back = createSprite(180,200,10,10);
  soldier_back.addImage("soldier_back", soldierbackimg);

  tree = createSprite(50,200,10,10);
  tree.addImage("tree", treeimg);
}

function draw() {
  background("black");
  stroke("white");
  line(0,255,1600,255);

  bullet.velocityX = speed;

  if(collided(wall, bullet)){
      bullet.velocityX = 0;
      
      damage =(0.5 * weight * speed * speed)/(thickness*thickness*thickness)

      if(damage>10){
        wall.shapeColor = "red";
        fill("00000");
        textSize(40);
        textStyle(BOLD);
        text("Fail!",560,210);
      }
      if(damage<10){
        wall.shapeColor = "green";
        fill("00000");
        textSize(40);
        textStyle(BOLD);
        text("Success!",550,210);
      }
  }

  drawSprites();
}

function collided(a, b){
  if((a.x - b.x) <= (a.width + b.width)/2){
    return true;
  }
  else{
    return false;
  }
}