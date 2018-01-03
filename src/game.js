const Game=function(topLeft,bottomRight) {
  this.topLeft=topLeft;
  this.bottomRight=bottomRight;
  this.snake={};
  this.score=0;
  this.food={};
}

Game.prototype.snakeHitMaze = function(maze){
  return maze.some(function(pos){
    return pos.isSameCoordAs(this.snake.getHead());
  })
}

Game.prototype.snakeHitNorth = function(){
  let sHead = this.snake.getHead();
  let sHeadCoOrd = sHead.getCoord();
  console.log(sHeadCoOrd);
  let sHeadDirection = sHead.getDirection();
  console.log(sHeadDirection);
  let arenaHeight = this.bottomRight.getY();
  if(sHeadCoOrd[1]<0){
    this.snake.setHead(new Position(sHeadCoOrd[0],sHeadCoOrd[1]+arenaHeight,sHeadDirection));
  }
}

Game.prototype.snakeHitSouth = function(){
  let sHead = this.snake.getHead();
  let sHeadCoOrd = sHead.getCoord();
  console.log(sHeadCoOrd);
  let sHeadDirection = sHead.getDirection();
  console.log(sHeadDirection);
  let arenaHeight = this.bottomRight.getY();
  if(sHeadCoOrd[1]>arenaHeight){
    this.snake.setHead(new Position(sHeadCoOrd[0],sHeadCoOrd[1]-arenaHeight-1,sHeadDirection));
  }
}

Game.prototype.snakeHitEast = function(){
  let sHead = this.snake.getHead();
  let sHeadCoOrd = sHead.getCoord();
  console.log(sHeadCoOrd);
  let sHeadDirection = sHead.getDirection();
  console.log(sHeadDirection);
  let arenaWidth = this.bottomRight.getX();
  if(sHeadCoOrd[0]>arenaWidth){
    this.snake.setHead(new Position(sHeadCoOrd[0]-arenaWidth-1,sHeadCoOrd[1],sHeadDirection));
  }
}

Game.prototype.snakeHitWest = function(){
  let sHead = this.snake.getHead();
  let sHeadCoOrd = sHead.getCoord();
  console.log(sHeadCoOrd);
  let sHeadDirection = sHead.getDirection();
  console.log(sHeadDirection);
  let arenaWidth = this.bottomRight.getX();
  if(sHeadCoOrd[0]<0){
    this.snake.setHead(new Position(sHeadCoOrd[0]+arenaWidth,sHeadCoOrd[1],sHeadDirection));
  }
}

Game.prototype.isSnakeOutOfArena=function(){
  this.snakeHitNorth();
  this.snakeHitSouth();
  this.snakeHitWest();
  this.snakeHitEast();
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
