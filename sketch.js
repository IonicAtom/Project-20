var car, wall, deformation
var speed, weight

function setup() {
  createCanvas(600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(500,200,60, height/2)
  wall.shapeColor = "darkGrey"
  car.velocityX = speed;
  car.shapeColor = "Black"
}

function draw() {
  background("grey");  
  if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x - car.x < wall.width/2 + car.width/2){
    deformation = (0.5 * weight * speed * speed)/22500
    car.velocityX = 0;
  }
  if (deformation < 100){
    car.shapeColor = "Green";
  }
  if (deformation > 100 && deformation < 180){
    car.shapeColor = "Yellow";
  }
  if (deformation > 180){
    car.shapeColor = "Red";
  }
  drawSprites();
}
