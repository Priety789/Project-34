//Create variables here
var dog, happyDog;
var dogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload() {
	//load images here
    dogImg = loadImage("images/Dog.png");
    happyDogImg = loadImage("images/happydog.png");
}

function setup() {
    createCanvas(600, 600);
    dog = createSprite(300, 400, 20, 20);
    dog.addImage(dogImg);
    database = firebase.database();
    foodStock = database.ref('food');
    foodStock.on("value", readStock);
}


function draw() {  
    background(46, 139, 87);

    if (keyWentDown(UP_ARROW)) {
        writeStock(foodS);
        dog.addImage(happyDogImg);
    }

    drawSprites();
    //add styles here
    textSize(20);
    fill(0);
    text(foodStock, 100, 50);
    text("Press the up arrow to feed the dog!", 150, 100);
}

function readStock(data) {
    foodS = data.val();
}

function writeStock(x) {
    database.ref('/').update({
        food: x
    })
}