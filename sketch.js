var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading=createElement("h1")
  scoreBoard=createElement("h1")  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
scoreBoard.html('score:'+score)
scoreBoard.style("color:red")
scoreBoard.position(width-200,20)
heading.html('life:'+life)
heading.style("color:red")
heading.position(width-200,70)
  if(gameState===1){
    gun.y=mouseY
    if(keyDown('space')){
    ShowBullet();
    }
    if(frameCount%80===0){
      drawBlueBullet();
    } 
    if(life<=0){
      gameState=2;
    }
    if(frameCount%100==0){
      drawredBullet();

    }
if(blueBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(blueBubbleGroup)
}
if(redBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(redBubbleGroup)
}
if(blueBubbleGroup.collide(backBoard)){
  handleGameOver(blueBubbleGroup)
}
if(redBubbleGroup.collide(backBoard)){
  handleGameOver(redBubbleGroup)
}
    drawSprites();
  }
   if(gameState==2){
     swal({

      title:"Gameover",
      text:"oops you lost the game lol",
      text:"youre score is "+score,
      confirmButtonText:"thanks for playing lol",
    imgUrl:"https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize:"100x100"
     })
   }
}

function drawBlueBullet(){
  bluebullet=createSprite(800,random(20,780),40,40)
  bluebullet.addImage(blueBubbleImg)
 bluebullet.scale=0.1
 bluebullet.velocityX=-8 
 bluebullet.lifetime=400
 blueBubbleGroup.add(bluebullet)
}

function drawredBullet(){
  redbullet=createSprite(800,random(20,780),40,40)
  redbullet.addImage(redBubbleImg)
 redbullet.scale=0.1
 redbullet.velocityX=-8 
 redbullet.lifetime=400
 redBubbleGroup.add(redbullet)
}
function handleBubbleCollision(BubbleGroup){
  if(life>0){
    score=score+1;
  }
  BubbleGroup.destroyEach();
  bulletGroup.destroyEach();

}
function handleGameOver(bubbleGroup){
  life=life-1;
  bubbleGroup.destroyEach();
  bulletGroup.destroyEach
}
function ShowBullet(){
  bullet=createSprite(gun.x,gun.y,20,20)
  bulletGroup.add(bullet);
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX=2
}