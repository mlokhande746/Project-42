const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bolt1,bolt2,bolt3,bolt4;

var engine,world;

var drops=[];
var maxDrops=100;

var rand;
var thunderCreatedFrame=0;
var thunder;

function preload(){
   bolt1=loadImage("thunderbolt/1.png");
   bolt2=loadImage("thunderbolt/2.png");
   bolt3=loadImage("thunderbolt/3.png");
   bolt4=loadImage("thunderbolt/4.png");
}

function setup(){ 
   engine=Engine.create();
   world=engine.world;
    
   createCanvas(400,700);
   umbrella=new Umbrella(200,500);

   if(frameCount%150 === 0){

   for(var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }

}

}

function draw(){
   Engine.update(engine);
   background(0);
  
   rand=Math.round(random(1,4));
   if(frameCount%80 === 0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
         case 1:thunder.addImage(bolt1);
                break;
         case 2:thunder.addImage(bolt2);
                break;     
         case 3:thunder.addImage(bolt3);
                break;
         case 4:thunder.addImage(bolt4);
                break;
         default:break;          
      }
      thunder.scale=random(0.3,0.6);
   }
   
   if(thunderCreatedFrame+10 === frameCount && thunder){
      thunder.destroy();
   }

   umbrella.display();

   for(var i=0;i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
   }

   drawSprites();
}   

