let maze222 = new Maze();
let east = "east";

// topLeft corner maze
for (var i = 0; i <= 10; i++) {
  maze222.store(new Position(0,i,east));
  maze222.store(new Position(i,0,east));
}
// topRight corner maze
for (var i = 109; i <=119; i++) {
  maze222.store(new Position(i,0,east));
}
for (var i = 1; i <=10 ; i++) {
  maze222.store(new Position(119,i,east));
}
// bottom left corner maze
for (var i = 50; i <=59; i++) {
  maze222.store(new Position(0,i,east));
}
for (var i = 1; i <=10 ; i++) {
  maze222.store(new Position(i,59,east));
}
// bottom right corner maze
for (var i = 50; i <=59 ; i++) {
  maze222.store(new Position(119,i,east));
}
for (var i = 109; i <= 118; i++) {
  maze222.store(new Position(i,59,east));
}
// internal maze structure
for (var i = 50; i <=59 ; i++) {
  maze222.store(new Position(i,20,east));
}
for (var i = 21; i <=29 ; i++) {
  maze222.store(new Position(59,i,east));
}
for (var i = 50; i <=59 ; i++) {
  maze222.store(new   Position(i,29,east));
}
for (var i = 29; i <=38 ; i++) {
  maze222.store(new Position(20+30,i,east));
}
for (var i = 50; i <=59 ; i++) {
  maze222.store(new Position(i,38,east));
}
