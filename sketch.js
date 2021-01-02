var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var parTicle;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);




   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
 // textSize(25);

  /*text("500", 15, 790);
  text("400", 95, 790);
  text("300", 15, 790);*/

  textSize(50);
  fill("yellow");
  text("-------------------------------------------------", 0, 475);
  
  var Indscore = 500;
  var Zreach = 0;

  for(var n = 15; n < 800; n = n + 80) {
    textSize(25);
    fill("aqua");
    text(Indscore, n, 550);
  if(Zreach === 0){
    Indscore = Indscore - 100;
  }
  if(Indscore === 0) {
    
    Zreach = 1;
  }
  if(Zreach === 1) {
    Indscore = Indscore + 100;
  }
 }
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }

   if(parTicle != null) {
     parTicle.display();
     var posy = parTicle.body.position.y;
     var posx = parTicle.body.position.x;

     if(posy > 475) {
       if(posx < 80) {
         score = score + 500;
         parTicle = null;
         if(count >= 5) gameState = "end";
       }
       else if(posx < 160) {
        score = score + 400;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 240) {
        score = score + 300;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 320) {
        score = score + 200;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 480) {
        score = score + 100;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 560) {
        score = score + 200;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 640) {
        score = score + 300;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else if(posx < 720) {
        score = score + 400;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
      else {
        score = score + 500;
        parTicle = null;
        if(count >= 5) gameState = "end";
      }
 

     }

   }

   if(gameState === "end") {
    textSize(100);
    fill("orange");
    text("GAME OVER", 100, 375);
  }
}

function mousePressed() {
  if(gameState !== "end"){
     count++;
     parTicle = new Particle(mouseX, 10, 10, 10);

  }

  

}