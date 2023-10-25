let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
//let ballNode = document.querySelector("#ball");
//let blitzNode = document.querySelector("#blitz");
//let batterNode = document.querySelector("#batter");
//let pitcherNode = document.querySelector("#pitcher");




// variables globales
//#batter
//let batterX = 220; // posición inicial del batter (punto de partida de movimiento izq.-der.)
//let batterY = 685; // posición inicial del batter (top, necesario para comparar)
//let batterSpeed = 20; // velocidad de movimiento del batter
//let batterRightMovement = true;
//let batterLeftMovement = true;

//#pitcher
// let pitcherX = 10; // posición inicial del pitcher
// let pitcherMinusX = 0; // posición secundaria del pitcher (necesario para evitar el valor numérico de '0' en function collisions)
//let pitcherSpeed = 3; // velocidad de movimiento del pitcher
// let pitcherRightMovement = true;
// let pitcherLeftMovement = true;

//#ball
// let ballY = 10; // posición inicial de la bola
// let ballX = 10; // posición inicial de la bola
// let ballSpeed = 5; // velocidad de movimiento de la bola

//#blitz
// let blitzY = 10; // posición inicial del blitz
// let blitzX = 10; // posición inicial del blitz
// let blitzSpeed = 5; // velocidad de movimiento del blitz

//#extras
// let balls = [];
// let blitzes = [];
// let lastElementTime = 0;
// let isCreatingBall = true; // Comienza creando una bola
// let ballInterval = 1000;
// let blitzInterval = 1000;


let gameBoxWidth = 490;
let gameBoxHeight = 795;


//let isGameOn = true;
let gameObject = undefined;




// function playersMovement () { // función encargada del pitcher
//     // Movimiento horizontal y vertical de: ball y blitz
    

//     // condicional para el efecto rebote del batter
//     /*if (batterRightMovement === true) { 
//         batterX += batterSpeed;
//     } else {
//         batterX -= batterSpeed;
//     }
//     batterNode.style.left = `${batterX}px`; // Movimiento de izquierda a derecha del batter

//     if (batterRightMovement) {
//         pitcherX += pitcherSpeed;
//     } else if (batterLeftMovement) {
//         batterX -= batterSpeed;
//     }
//     batterNode.style.left = `${pitcherX}px`; // Movimiento de derecha a izquierda del pitcher*/
// }






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

}


// eventListeners
startBtnNode.addEventListener("click", startGame);

// control del batter con las teclas
document.addEventListener('keydown', (event) => {
    //console.log('presionando una tecla'); // verificando que la consola reconoce la orden 
    console.log(event.code); // auch: 'event.key' indica que tecla se está presionando
    if (event.code === 'KeyA' && gameObject.player.x> -1) { // indica la tecla para la izq. y el limite izq. del gamebox para el batter
        //console.log('moviendo a la izq.');
        gameObject.player.x -= gameObject.player.speed;
        gameObject.player.node.style.left = `${gameObject.player.x}px`;
    } else if (event.code === 'KeyD' && gameObject.player.x < gameBoxWidth - 10) { // indica la tecla para la der. y el limite der. del gamebox para el batter
        //console.log('moviendo a la der.');
        gameObject.player.x += gameObject.player.speed;
        gameObject.player.node.style.left = `${gameObject.player.x}px`;
    }
});