const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var option={restitution:1.5}

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);

    ball = Bodies.circle(200,200,20,option);
    World.add(world,ball)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,20,20);
}