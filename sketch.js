var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var obstaculo1 
var obstaculo2
var obstaculo3
var obstaculo4
var boy_running
function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
  boy=loadAnimation("jake1.png,jake2.png,jake3.png,jake4.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite(100,300,200,300)
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(50,300,80,110)
//adicione uma animação de corrida para ele
boy.addAnimation("running",boy_running)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
score = 0
obstaculoGroup=new Group()
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }

path.velocityY=-2
console.log(path.x)

if (path.x<0) {
  path.x=path.width/2
}

if (gameState === PLAY) {
  path.velocityY = -4
  score = score + Math.round(frameCount/60)
  if(path.Y < 0)
    path.Y = path.width/2
}
if(obstaculoGroup.isTouching (boy)){
gameState=END

}
if (gameState === END) {
  path.velocityY = 0
  boy.velocityY = 0

  obstaculoGroup.setVelocityYEach (0)
}


  drawSprites();

  
}
function spawObstaculos() {
  if (frameCount % 60 === 0) {
    var obstaculo = createSprite(400,165,60,60)
    
    var rand = Math.round(random(1,6))
    switch (rand) {
      case 1:obstaculo.addImage(obstaculo1)

      case 2:obstaculo.addImage(obstaculo2)
      
      case 3:obstaculo.addImage(obstaculo3)

      case 4:obstaculo.addImage(obstaculo4)
        break;
    
      default:
        break;
    }
    obstaculo.scale = 0.5
    obstaculo.lifetime = 300
    obstaculoGroup.add(obstaculo)
  

  }
  
}