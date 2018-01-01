const Game=function(topLeft,bottomRight) {
  this.topLeft=topLeft;
  this.bottomRight=bottomRight;
  this.snake={};
  this.score=0;
  this.food={};
}

Game.prototype.addSnake=function(snake) {
  this.snake=snake;
}

Game.prototype.getSnake=function() {
  return snake;
}

Game.prototype.turnLeft=function() {
  return this.snake.turnLeft();
}

Game.prototype.turnRight=function() {
  return this.snake.turnRight();
}

Game.prototype.grow=function() {
  let growthFactor=this.food.getGrowthFactor();
  console.log(growthFactor);
  return this.snake.grow(growthFactor);
}

Game.prototype.getFood=function() {
  return this.food;
}

Game.prototype.move=function() {
  let details={};
  details.oldHead=this.snake.getHead();
  details.oldTail=this.snake.move();
  details.head=this.snake.getHead();
  return details;
}

Game.prototype.hasSnakeEatenFood=function() {
  return this.snake.head.isSameCoordAs(this.food.getPosition());
}

Game.prototype.createFood=function() {
  console.log(this.bottomRight);
  let position=generateRandomPosition(this.bottomRight.x,this.bottomRight.y);

  let random=generateRandomNumberBetween(0,10);
  let growthFactor=1;
  let superFood=false;
  if(random>5) {
    growthFactor=10;
    superFood=true;
  }
  this.food=new Food(position,growthFactor,superFood);
}

Game.prototype.increaseScore=function(){
  this.score+=10;
}
Game.prototype.getScore=function(){
  return this.score;
}

Game.prototype.updateScore=function(){
  let score = this.getScore();
  document.querySelector('#scoreValue').innerText = score;
}

Game.prototype.goNorth=function(){
  if(!this.snake.isGoingSouth())
  {return this.snake.goNorth();}
}

Game.prototype.goEast=function(){
  if(!this.snake.isGoingWest())
  {return this.snake.goEast();}
}

Game.prototype.goSouth=function(){
  if(!this.snake.isGoingNorth())
  {return this.snake.goSouth();}
}

Game.prototype.goWest=function(){
  if(!this.snake.isGoingEast())
  {return this.snake.goWest();}
}
