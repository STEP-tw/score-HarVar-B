let numberOfRows=60;
let numberOfCols=120;
let maze = new Maze();
let cells=[];

const updateGrid = function(){
  // clear grid
  drawMaze(maze);
}

const removePosition = function(position){
  console.log("removing",position.toString());
  maze.remove(position);
  paintCell(position,"");
}

const sendCells = function(event){
  console.log(cells);
  let cellID = event.target.id.toString();
  let cellX = cellID.split("_")[0];
  let cellY = cellID.split("_")[1];
  let cell = [cellX,cellY];
  let req = new XMLHttpRequest();
  req.open("POST","/gotCells");
  // req.send(JSON.stringify(maze));
  req.send(JSON.stringify(cell));
}

const storeCell = function(cell){
  // let cellID = event.target.id.toString();
  // cells.push(cellID);
  // let cellX = cellID.split("_")[0];
  // let cellY = cellID.split("_")[1];
  console.log("cell at storeCell()",cell);
  let cellPos = new Position(cellX,cellY,"east");
  // console.log(cellPos);
  if(maze.doesInclude(cellPos)){
    removePosition(cellPos)
  }else{
    maze.store(cellPos)
  }
  updateGrid();
}

const addKeyListener=function() {
  let grid = document.getElementById("keys");
  grid.onclick=sendCells;
  grid.focus();
}

const createMaze=function(){
  let mazeName = askForAName();
  maze.setName(mazeName);
  mazes.push(maze);
}


const main = function(){
  drawGrids(numberOfRows,numberOfCols);
  addKeyListener();
}


window.onload = main;
