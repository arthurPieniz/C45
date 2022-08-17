var bgImg;
var bg;
var monkey;
var monkeyImg;
var plataformaImg;
var plataforma;
function preload(){
    bgImg = loadImage("./assets/Fundo1.jpg");
    monkeyImg = loadAnimation("./assets/macaco.png","./assets/macaco.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //bg = createSprite(300,490,2560,1440);
    //bg.addImage('bg',bgImg);
    //bg.x = bg.width/1;
    //bg.scale = 3;
    monkey = createSprite(width/2,height/2,200,200);
    monkey.addAnimation('monkey',monkeyImg);
}

function draw(){
    background(bgImg);
    textSize(50);
    fill("white");
    text("Pontuação: ",15,45);
    //bg.velocityX = -4;
    //if(bg.x<0){
       // bg.x = bg.width/1;
    //}
    
    spawnPlataformas();
    
    drawSprites();
}

function spawnPlataformas(){
    if(frameCount%80==0){
        var plataform = createSprite(2000,500,300,75);
        plataform.y = Math.round(random(350,700));
        plataform.velocityX = -7;
    }

}