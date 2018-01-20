const fs = require('fs');
const timeStamp = require('./src/time.js').timeStamp;
const http = require('http');
const WebApp = require('./src/webapp');
let cells =[];


let app = WebApp.create();
app.get('/index.html',(req,res)=>{
  res.setHeader('Content-type','text/html');
  res.write(fs.readFileSync('./index.html'));
  res.end();
});

app.get('/mazeCreator.html',(req,res)=>{
  res.setHeader('Content-type','text/html');
  res.write(fs.readFileSync('./mazeCreator.html'));
  res.end();
});

app.get('/src/draw.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/draw.js'));
  res.end();
});

app.get('/src/food.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/food.js'));
  res.end();
});

app.get('/src/game.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/game.js'));
  res.end();
});

app.get('/src/main.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/main.js'));
  res.end();
});

app.get('/src/maze.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/maze.js'));
  res.end();
});

app.get('/src/maze222.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/maze222.js'));
  res.end();
});

app.get('/src/mazeCreator.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/mazeCreator.js'));
  res.end();
});

app.get('/src/mazes.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/mazes.js'));
  res.end();
});

app.get('/src/position.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/position.js'));
  res.end();
});

app.get('/src/snake.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/snake.js'));
  res.end();
});

app.get('/src/time.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/time.js'));
  res.end();
});

app.get('/src/utils.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/utils.js'));
  res.end();
});

app.get('/src/webapp.js',(req,res)=>{
  res.setHeader('Content-type','text/javascript');
  res.write(fs.readFileSync('./src/webapp.js'));
  res.end();
});

app.get('/snake.css',(req,res)=>{
  res.setHeader('Content-type','text/css');
  res.write(fs.readFileSync('./snake.css'));
  res.end();
});

app.get('/submitPage.html',(req,res)=>{
  res.setHeader('content-type','text/html');
  res.write(fs.readFileSync('./submitPage.html'));
  res.end();
});

app.post('/gotCells',(req,res)=>{
  console.log("-->",req.body,"<--");
  let data =req.body;
  console.log("-->",data,"<--");
  cells.push(data);
  console.log("cells:",cells);
  // fs.appendFileSync('./src/mazes.js',"\n"+data);
})

const PORT = 2150;
let server = http.createServer(app);
server.on('error',e=>console.error('**error**',e.message));
server.listen(PORT,(e)=>console.log(`server listening at ${PORT}`));
