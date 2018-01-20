let game=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
let animator=undefined;

const animateSnake=function() {
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.increaseScore();
    updateScore();
    game.grow();
    game.createFood();
    drawFood(game.getFood());
  }
  game.isSnakeOutOfArena();
  if(game.gameOver()){
    newGame();
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnLeft();
      break;
    case "KeyD":
      game.turnRight();
      break;
    case "KeyC":
      game.grow();
      break;
    case "ArrowUp":
      game.goNorth();
      break;
    case "ArrowRight":
      game.goEast();
      break;
    case "ArrowDown":
      game.goSouth();
      break;
    case "ArrowLeft":
      game.goWest();
      break;
    case "KeyW":
      animateSnake();
      break;
    case "KeyP":
      clearInterval(animator);
      break;
    case "KeyR":
    animator=setInterval(animateSnake,140);
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
  game.addSnake(snake);
}

const snakeHitWall=function(snake){
  let block = snake.head;
  return block.x<0||block.y<0||block.x>numberOfCols-1||block.y>numberOfRows-1;
}

const newGame=function(){
  clearInterval(animator);
  document.write("<h1>GAME OVER!<h1> <p><button onclick=window.location.reload()>Play again</button><p>");
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight);
}

const startGame=function() {
  createGame();
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawMaze(maze222);
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
  addKeyListener();
  animator=setInterval(animateSnake,120);
}

window.onload=startGame;
