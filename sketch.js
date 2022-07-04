//declarando as variáveis
var trex,trexRunning
var edges
var ground,groundImg
//preload carrega as mídias do jogo
function preload(){
  trexRunning = loadAnimation('./images/trex3.png','./images/trex4.png')
  groundImg = loadImage("./images/ground2.png")
}


//setup faz a configuração
function setup(){
  createCanvas(600,200);

  //sprite trex
  trex = createSprite(50,170,20,40);
  trex.addAnimation('Running',trexRunning);
  trex.scale = 0.5


  //sprite Solo
  ground = createSprite (300,190,600,20)
  ground.addImage("ground",groundImg)

  //criando bordas
  edges = createEdgeSprites()
  
}

//draw faz o movimento, a ação do jogo
function draw(){
  background("lightgray");

  //pulo do trex
  if (keyDown('space' ) || keyDown('up')) {
    trex.velocityY = -10;
  }
  gravity()
 
  if (ground.x < 0) {
    ground.x = ground.width/2
    }

  trex.collide(ground)
  ground.velocityX = -2

 
  //coordenadas do mouse na tela
  text("X: "+mouseX+" / Y: "+ mouseY,mouseX,mouseY)

  drawSprites();
}

function gravity(){
  trex.velocityY += 0.5
}
