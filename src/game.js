const Game=function(topLeft,bottomRight) {
  this.topLeft=topLeft;
  this.bottomRight=bottomRight;
  this.snake={};
  this.score=0;
  this.food={};
}

Game.prototype.snakeHitWall = function () {
  let result = undefined;
  let sHeadCoOrd = snake.getHead().getCoord();
  let topLeft = this.topLeft;
  let bottomRight = this.bottomRight;
  // console.log("topLeft :",this.topLeft);
  result = sHeadCoOrd[0]<topLeft.x||sHeadCoOrd[1]<topLeft.y;
  // console.log("bottomRight :",this.bottomRight);
  result = result || sHeadCoOrd[0]>bottomRight.x-1 || sHeadCoOrd[1]>bottomRight.y-1;
  return result;
};

Game.prototype.snakeHitMaze = function(maze){
  return maze.some(function(pos){
    return pos.isSameCoordAs(this.snake.getHead());
  })
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
  let position = undefined;
  do{
    position=generateRandomPosition(this.bottomRight.x,this.bottomRight.y);
  }
  while(this.snake.getBody().some(function(part){
    return position.isSameCoordAs(part);
  })
  || maze222.some(function(part){
    return position.isSameCoordAs(part);
  }))
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

Game.prototype.gameOver = function(){
  let result=game.snakeHitWall(this.snake)|| this.snake.hitItself();
  result = result || game.snakeHitMaze(maze222);
  return result;
}
