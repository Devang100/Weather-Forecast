const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg(); 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responceJSON = await responce.json();
    var datetime = responceJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sprites/sunrise1.png"
    }
    if(hour>=07 && hour<=08){
        bg = "sprites/sunrise2.png"
    }
    if(hour>=09 && hour<=010){
        bg = "sprites/sunrise3.png"
    }
    if(hour>=11 && hour<=12){
        bg = "sprites/sunrise4.png"
    }
    if(hour>=13 && hour<=14){
        bg = "sprites/sunrise6.png"
    }
    if(hour>=15 && hour<=16){
        bg = "sprites/sunset8.png"
    }
    if(hour>=17 && hour<=18){
        bg = "sprites/sunset9.png"
    }
    if(hour>=19 && hour<=20){
        bg = "sprites/sunset10.png"
    }
    if(hour>=21 && hour<=22){
        bg = "sprites/sunset11.png"
    }
    if(hour>=23 && hour<=03){
        bg = "sprites/sunset12.png"
    }



    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
}
