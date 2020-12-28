var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle ;
var turns = -1;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  mousePressed();
  
   for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){   
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
    }

function draw() {
  background("black");
  
  Engine.update(engine);
  
  textSize(20)
  text("Score : "+score,20,30);
  text("Turns:"+turns,600,30)
  text("250",30,530);
  text("250",110,530);
  text("250",190,530);
  text("250",270,530);
  text("100",350,530);
  text("100",430,530);
  text("150",510,530);
  text("150",590,530);
  text("200",670,530);
  text("200",750,530);

   for (var i = 0; i < plinkos.length; i++) { 
     plinkos[i].display(); 
   }

    for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

 if(particle != null){
  particle.display();

  if(particle.body.position.y >700){
    if(particle.body.position.x <300){
      score=score+250;
      particle = null;
    }
  }
}

  if(particle != null){
    particle.display();
  if(particle.body.position.y >700){
    if(particle.body.position.x <450 && particle.body.position.x>300){
      score=score+100;
      particle = null;
    }
  }
 }

if(particle != null){
  particle.display();
if(particle.body.position.y >700){
  if(particle.body.position.x <600 && particle.body.position.x>450){
    score=score+150;
    particle = null;
  }
 }
}

if(particle != null){
  particle.display();
if(particle.body.position.y >700){
  if(particle.body.position.x <760 && particle.body.position.x>600){
    score=score+200;
    particle = null;
  }
 }
} 

   if(turns === 5 ){
    gameState = "end";
    textSize(75);
    fill(255);
    text("GAME OVER",150,350)
    
     }
   
}

function mousePressed(){
if (gameState !== "end"){
  turns++
  particle = new Particle(mouseX,10,10)
}
}

