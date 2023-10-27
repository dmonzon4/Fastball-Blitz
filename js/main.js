let startBtnNode = document.querySelector("#start-btn");
let backMenuBtnNode = document.querySelector("#backMenu-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
// let gameOverBtnNode = document.querySelector("#gameOver-screen");

let gameBoxWidth = 490;
let gameBoxHeight = 795;

//let isGameOn = true;
let gameObject = undefined;

// function collisions() { // Verificar colisiones con los límites del juego
//     if (ballY > gameBoxHeight) {
//         console.log('ball collision');

//     } if (blitzY > gameBoxHeight) {
//         console.log('blitz collision');

//     } if (batterX > gameBoxWidth) {
//         console.log('batter collision');
//         batterRightMovement = false;

//     }

// };

//funcion para verificar la colision de ball y blitz en la parte inferior
// function batterCollision () {
//     if (ballY + 20 > batterY &&
//         ballX > batterX &&
//         ballX + 20 < batterX + 120) {
//         //console.log('ball collision2');
//     } if (blitzY + 20 > batterY) {
//         //console.log('blitz collision2');
//     }
// }

const startGame = () => {
  splashScreenNode.style.display = "none";
  fieldImageNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  console.log(gameObject);

  gameObject.gameLoop();
};

const backMenu = () => {
  splashScreenNode.style.display = "Flex";
  fieldImageNode.style.display = "Flex";
  gameScreenNode.style.display = "none";
};

// const gameOver = () => {
//     splashScreenNode.style.display = "Flex";
//     fieldImageNode.style.display = "none";
//     gameScreenNode.style.display = "none";
// }

// eventListeners
startBtnNode.addEventListener("click", startGame);
backMenuBtnNode.addEventListener("click", backMenu);
// gameOverBtnNode.addEventListener("click", gameOver);

// control del batter con las teclas
document.addEventListener("keydown", (event) => {
  //console.log('presionando una tecla'); // verificando que la consola reconoce la orden
  //console.log(event.code); // auch: 'event.key' indica que tecla se está presionando
  if (event.code === "KeyA" && gameObject.player.batterX) {
    // indica la tecla para la izq. y el limite izq. del gamebox para el batter
    //console.log('moviendo a la izq.');
    gameObject.player.batterX -= gameObject.player.batterSpeed;
    gameObject.player.batterNode.style.left = `${gameObject.player.batterX}px`;
  } else if (
    event.code === "KeyD" &&
    gameObject.player.batterX < gameBoxWidth - 10
  ) {
    // indica la tecla para la der. y el limite der. del gamebox para el batter
    //console.log('moviendo a la der.');
    gameObject.player.batterX += gameObject.player.batterSpeed;
    gameObject.player.batterNode.style.left = `${gameObject.player.batterX}px`;
  }
});
