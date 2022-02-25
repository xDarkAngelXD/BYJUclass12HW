var runner, runner_running, path, pathImg; 
var boundary1, boundary2;


function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  runner = createSprite(180, 340, 30, 30);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1;
  boundary1 =createSprite(0, 0, 100, 800);
  boundary2 = createSprite(410, 0, 100, 800);
  boundary1.visible = false;
  boundary2.visible = false;
  //create sprites here
}

function draw() {
  background(0);
  runner.x = World.mouseX;
  edges = createEdgeSprites(); 
  runner.collide(edges[3]); 
  runner.collide(boundary1); 
  runner.collide(boundary2);

  if(path.y > 400){
    path.y = height/2;
  }
  drawSprites()
}
