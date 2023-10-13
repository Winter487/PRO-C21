const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// VARIAVEL QUE VAI MUDAR DE VALOR, CONST NÃO MUDA
let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  //mecanismo e o mundo 
  engine = Engine.create();
  world = engine.world;


  //botão
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(Up);



  //criar textos 
  ground = new Ground(200, 390, 400, 20);
  top_wall = new Ground(200,10,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  ellipseMode(RADIUS);
  rectMode(CENTER);



}
function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  Engine.update(engine);
}


// para aplicar uma força usamos o comando Matter.Body.applyForce.
// corpo
// velocidade inicial{x:0, y:0}
//,
//velocidade final {x:0, y:0}

function Up(){
  Matter.Body.applyForce(ball, {x:0 , y:0},{x:0,y:-0.05})


}