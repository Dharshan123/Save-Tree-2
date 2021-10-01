var PLAY = 1;
var END = 0;
var gameState = PLAY;
var count = 0;

function preload() {
  boyImg = loadImage("Images/Boy PNG.png");
  //treeImg = loadImage("Images/OIP.jpg");
  tree1Img = loadImage("Images/Tree PNG 1.png");
  //tree2Img = loadImage("Images/Tree PNG 2.png");
  axeImg = loadImage("Images/Axe PNG.png");
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.1;

  tree = createSprite(56,99,23,34);
  tree.addImage(tree1Img);
  tree.scale = 0.1;

  tree1 = createSprite(56,200,23,34);
  tree1.addImage(tree1Img);
  tree1.scale = 0.1;

  tree3 = createSprite(56,250,23,34);
  tree3.addImage(tree1Img);
  tree3.scale = 0.1;

  tree4 = createSprite(56,300,23,34);
  tree4.addImage(tree1Img);
  tree4.scale = 0.1;

  tree5 = createSprite(56,350,23,34);
  tree5.addImage(tree1Img);
  tree5.scale = 0.1;

  tree6 = createSprite(56,400,23,34);
  tree6.addImage(tree1Img);
  tree6.scale = 0.1;

  tree7 = createSprite(130,200,23,34);
  tree7.addImage(tree1Img);
  tree7.scale = 0.1;

  tree8 = createSprite(130,250,23,34);
  tree8.addImage(tree1Img);
  tree8.scale = 0.1;

  tree9 = createSprite(200,150,23,34);
  tree9.addImage(tree1Img);
  tree9.scale = 0.1;

  tree10 = createSprite(200,250,23,34);
  tree10.addImage(tree1Img);
  tree10.scale = 0.1;

  tree11 = createSprite(200,350,23,34);
  tree11.addImage(tree1Img);
  tree11.scale = 0.1;

  tree12 = createSprite(200,400,23,34);
  tree12.addImage(tree1Img);
  tree12.scale = 0.1;

  tree13 = createSprite(200,750,23,34);
  tree13.addImage(tree1Img);
  tree13.scale = 0.1;

  axeGroup = new Group();
}

function draw() {
  background(	"#228B22");  
    if (gameState===PLAY){

      if(keyDown(UP_ARROW) && boy.y > 80){
        writePosition(0,-7);
      }
      else if(keyDown(DOWN_ARROW) && boy.y < 320){
        writePosition(0,+7);

        for(i=0;i<axeGroup.length;i++) {
          if(axeGroup[i].isTouching(boy)) {
            axeGroup[i].destroy();
           }
         }
        
         for(i=0;i<axeGroup.length;i++) {
          if(axeGroup[i].isTouching(tree)) {
            tree.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree1)) {
            tree1.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree3)) {
            tree3.destroy();
            count++;
           }  
           
           if(axeGroup[i].isTouching(tree3)) {
            tree3.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree4)) {
            tree4.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree5)) {
            tree5.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree6)) {
            tree6.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree7)) {
            tree7.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree8)) {
            tree8.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree9)) {
            tree9.destroy();
            count++;
           }  
           
           if(axeGroup[i].isTouching(tree10)) {
            tree10.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree11)) {
            tree11.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree12)) {
            tree12.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree13)) {
            tree13.destroy();
            count++;
           }
        
           if(axeGroup[i].isTouching(tree13)) {
            tree13.destroy();
            count++;
           }
          }
          console.log(count)
      axe();
      if (count>1){
        //gameState = END; 
        gameOver = createSprite(300,300,30,30);
        console.log("end");
      } 
    }
    
  /*else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    axeGroup.setVelocityXEach(0);
    axeGroup.setLifetimeEach(-1);
    fill("black");
    text("Game Over",300,300);

  }*/


  drawSprites();



}

function writePosition(x,y){
  boy.x = boy.x + x;
  boy.y = boy.y + y;
}

function axe() {
  //write code here to spawn the axe
  if (frameCount % 60 === 0) {
    var axe = createSprite(600,120,40,10);
    axe.y = Math.round(random(80,350));
    axe.addImage(axeImg);
    axe.scale = 0.1;
    axe.velocityX = -3;
    
     //assign lifetime to the variable
    axe.lifetime = 300;
    
    //add each cloud to the group
    axeGroup.add(axe);
  }
  
 }
}