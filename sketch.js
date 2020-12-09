 const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

      var engine,world; 
      var particles = [];
      var plinkos=[];
      var divider=[];
      var ground;
      var divider;
      var dividerHeight=300


var dividerHeight = 150;


function setup() {
  createCanvas(480,800);
  
  engine=Engine.create()
  world=engine.world

  for(var k = 0; k <=width ; k = k + 80){
    divider.push(new Divider (k, height-dividerHeight/2 ,10 ,dividerHeight))
}

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    divider.push(new Divider(k, height-dividerHeight/2, 10, dividerHeight));
  }
 ground=new Ground (width/2,height,width ,10)

}


function draw() {
  background("red");  

  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<divider.length;k++){
    divider[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

//divider.display()
//particles.display()
//plinkos.display()
 ground.display()

  drawSprites();
}