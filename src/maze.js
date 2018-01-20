const Maze = function(){
  this.positions=[];
  this.name="";
};

Maze.prototype = {
  store:function(position){
    this.positions.push(position);
  },
  remove:function(position){
    this.positions = this.positions.filter(function(pos){
      return !position.isSameCoordAs(pos);
    });
  },
  doesInclude: function(position){
    return this.positions.some(function(pos){
      return pos.isSameCoordAs(position);
    });
  },
  getPositions:function(){
    return this.positions;
  },
  setName:function(name){
    this.name=name;
  }
};
