var player;
var hurdle;
var track;
var form;
var game;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form = new Form();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  form.display();
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
