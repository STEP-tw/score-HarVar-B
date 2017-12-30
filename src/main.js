let snake=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
let score = 0;

let animator=undefined;

const animateSnake=function() {
  let oldHead=snake.getHead();
  let oldTail=snake.move();
  let head=snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(head.isSameCoordAs(food)) {
    increaseScore();
    snake.grow();
    createFood(numberOfRows,numberOfCols);
    drawFood(food);
  }
  if(gameOver(snake)){
    newGame();
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const increaseScore=function(){
  score+=10;
  document.querySelector('#score').innerText = score;
}

const snakeHitWall=function(snake){
  let block = snake.head;
  return block.x<0||block.y<0||block.x>numberOfCols-1||block.y>numberOfRows-1;
}

const gameOver = function(snake){
  return snakeHitWall(snake)||snake.hitItself();
}

const newGame=function(){
  clearInterval(animator);
  document.write("<h1>GAME OVER!<h1> <p><button onclick=window.location.reload()>Play again</button><p>");
}

const startGame=function() {
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows,numberOfCols);
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
