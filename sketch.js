var bronzeCoinImg, silverCoinImg, goldCoinImg;
var runnerAnim;
var gameOverImage, spikeImg;
var pickCoin, gameOverSound;

var bg, runner, bronzeCoin, silverCoin, goldCoin;
var bronzeCoinGroup, silverCoinGroup, goldCoinGroup;

function preload() {
  bronzeCoinImg = loadImage("./assets/bronzeCoin.png");
  silverCoinImg = loadImage("./assets/silverCoin.png");
  goldCoinImg = loadImage("./assets/goldCoin.png");

  runnerAnim = loadAnimation("./assets/runner1.png", "./assets/runner2.png");

  gameOverImage = loadImage("./assets/gameOver.png");
  spikeImg = loadImage("./assets/spike.png");

  pickCoin = loadSound("./assets/pick_coin.wav");
  gameOverSound = loadSound("./assets/game_over.wav");
}

function setup() {
  createCanvas(600, 600);

  //bg = createSprite(width / 2, height / 2);
  //bg.addImage()

  runner = createSprite(width / 2, height - 75);
  runner.addAnimation("running", runnerAnim);
  runner.scale = 0.1

  bronzeCoinGroup = new Group();
  silverCoinGroup = new Group();
  goldCoinGroup = new Group();
}

function draw() {
  background(0);
  textSize(20);

  if (frameCount % 60 == 0) {
    var randomNumber = round(random(1, 3));
    switch (randomNumber) {
      case 1:
        addBronzeCoin();
        randomNumber = round(random(1, 3));
        break;
      case 2:
        addSilverCoin();
        randomNumber = round(random(1, 3));
        break;
      case 3:
        addGoldCoin();
        randomNumber = round(random(1, 3));
        break;
      default:
        break;
    }
  }

  drawSprites();
}

function addBronzeCoin() {
  bronzeCoin = createSprite(random(30, width - 30), -50)
  bronzeCoin.addImage(bronzeCoinImg);
  bronzeCoin.scale = 0.75;
  bronzeCoin.velocityY = 4;
  if (bronzeCoin.y > width + 100) {
    bronzeCoin.destroy();
    //console.log("deleted");
  }

  bronzeCoinGroup.add(bronzeCoin);
}

function addSilverCoin() {
  silverCoin = createSprite(random(30, width - 30), -50)
  silverCoin.addImage(silverCoinImg);
  silverCoin.scale = 0.75;
  silverCoin.velocityY = 4;
  if (silverCoin.y > width + 100) {
    silverCoin.destroy();
    //console.log("deleted");
  }

  silverCoinGroup.add(silverCoin);
}

function addGoldCoin() {
  goldCoin = createSprite(random(30, width - 30), -50)
  goldCoin.addImage(goldCoinImg);
  goldCoin.scale = 0.75;
  goldCoin.velocityY = 4;
  if (goldCoin.y > width + 100) {
    goldCoin.destroy();
    //console.log("deleted");
  }

  goldCoinGroup.add(goldCoin);
}