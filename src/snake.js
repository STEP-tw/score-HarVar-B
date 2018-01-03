const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function(growthFactor) {
    for (var i = 0; i < growthFactor; i++) {
      this.body.unshift(new Position(Infinity,Infinity,this.direction));
    }
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  hitItself : function(){
    let sHead = this.head;
    let sBody = this.body;
    let result=sBody.some(function(other){return sHead.isSameCoordAs(other)});
    // result && console.log("snake hit itself.");
    return result;
  },
  isGoingSouth:function(){
    return this.head.getDirection()=="south";
  },
  isGoingWest:function(){
    return this.head.getDirection()=="west";
  },
  isGoingEast:function(){
    return this.head.getDirection()=="east";
  },
  isGoingNorth:function(){
    return this.head.getDirection()=="north";
  },
  goNorth:function(){
    this.head=this.head.goNorth();
  },
  goEast:function(){
    this.head=this.head.goEast();
  },
  goSouth:function(){
    this.head=this.head.goSouth();
  },
  goWest:function(){
    this.head=this.head.goWest();
  }
}
