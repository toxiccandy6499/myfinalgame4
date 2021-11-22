const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var balls = [];
var Asteroid;
var player1;
var bg2;
var AsteroidSpritedata, AsteroidSpritesheet;
var brokenAsteroidAnimation = [];
var brokenAsteroidSpritedata, brokenAsteroidSpritesheet;



function preload(){
  
  bg2 = loadImage("bg2.jpg");
  player1 = loadImage("player1.png");
  Asteroid = loadImage("Asteroid.png");
  AsteroidSpritedata = loadJSON("Asteroid.json");
  AsteroidSpritesheet = loadImage("Asteroid.png");
  brokenAsteroidSpritedata = loadJSON("brokenAsteroid.json");
  brokenAsteroidSpritedata = loadImage("brokenAsteroid.png");
  
 
}

function setup() {
  createCanvas(1200, 600);

  
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(0,height - 1,width* 2 ,1 ,{ isStatic:true });
  World.add(world,ground);


  Asteroid = new Asteroid (160,140,130,190,angle);
  World.add(world,Asteroid);

  
 
  
  
  
}



function draw() 
{
  background(189);
  
  
  
image(bg2, 0, 0, width, height);
Engine.update(engine);
var options = {
  isStatic: true
}




}




