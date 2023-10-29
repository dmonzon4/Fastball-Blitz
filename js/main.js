// buttons
let startBtnNode = document.querySelector("#start-btn");
let reStartBtn = document.querySelector('#restart-btn');

let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");

let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");


let gameOverScreen = document.querySelector("#gameOver-screen");
let batsImageNode = document.querySelector("#bats-image");

let gameBoxWidth = 490;
let gameBoxHeight = 795;


let gameObject = undefined;

let scoreScreenNode = document.querySelector("#scoreDisplay");



// // funcion para verificar la colision de ball y blitz en la parte inferior
// function batterCollision () {
//     if (this.ballY + 20 > this.batterY &&
//         this.ballX > this.batterX &&
//         this.ballX + 20 < this.batterX + 120) {
//         console.log('ball collision2');
//     } if (this.blitzY + 20 > this.batterY) {
//         console.log('blitz collision2');
//     }
// };


const startGame = () => {
  splashScreenNode.style.display = "none"; //lo quita y pone el juego
  fieldImageNode.style.display = "none"; //lo quita y pone el juego
  gameScreenNode.style.display = "flex"; // pone el juego (game box también)
  gameOverScreen.style.display = "none";

  gameObject = new Game();
  gameObject.playMusic();
  gameObject.gameLoop();
};



const gameOver = () => {
  splashScreenNode.style.display = "none";
  fieldImageNode.style.display = "none";
  gameScreenNode.style.display = "none";
  gameOverScreen.style.display = "flex";
  batsImageNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const reStartGame = () => {
  splashScreenNode.style.display = "none"; //lo quita y pone el juego
  fieldImageNode.style.display = "none"; //lo quita y pone el juego
  gameScreenNode.style.display = "flex"; // pone el juego (game box también)
  gameOverScreen.style.display = "none";
  batsImageNode.style.display = "none";

  gameObject = new Game();
  gameObject.playMusic();
  gameObject.gameLoop();
};



// eventListeners
startBtnNode.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);



// control del batter con las teclas
document.addEventListener("keydown", (event) => {
  //console.log('presionando una tecla'); // verificando que la consola reconoce la orden
  //console.log(event.code); // auch: 'event.key' indica que tecla se está presionando
  if (event.code === "KeyA" && gameObject.player.batterX) {
    // indica la tecla para la izq. y el limite izq. del gamebox para el batter
    //console.log('moviendo a la izq.');
    gameObject.player.batterX -= gameObject.player.batterSpeed;
    gameObject.player.batterNode.style.left = `${gameObject.player.batterX}px`;
  } else if (event.code === "KeyD" && gameObject.player.batterX < gameBoxWidth - 50) {
    // indica la tecla para la der. y el limite der. del gamebox para el batter
    //console.log('moviendo a la der.');
    gameObject.player.batterX += gameObject.player.batterSpeed;
    gameObject.player.batterNode.style.left = `${gameObject.player.batterX}px`;
  }
});
