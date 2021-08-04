class Paper {
    constructor(){
    var options = {
        isStatic: false,
        restitution: 0.6,
        friction: 0,
        density:1.2
      } 
      this.body = Bodies.rectangle(200,200,50,50,options);
      World.add(world,this.body);
    }
      display(){
          var pos =this.body.position;
          rect(pos.x,pos.y,this.width,this.height);
         


      }
}