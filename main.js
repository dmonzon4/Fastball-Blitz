let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let ballNode = document.querySelector("#ball");
let blitzNode = document.querySelector("#blitz");
let batterNode = document.querySelector("#batter");
let pitcherNode = document.querySelector("#pitcher");




// variables globales
let ballY = 10; // posición inicial de la bola
let ballX = 10; // posición inicial de la bola

let blitzY = 10; // posición inicial del blitz
let blitzX = 10; // posición inicial del blitz

let batterX = 220; // posición inicial del batter (punto de partida de movimiento izq.-der.)
let batterY = 685; // posición inicial del batter (top, necesario para comparar)

let pitcherX = 10; // posición inicial del pitcher
let pitcherMinusX = 0; // posición secundaria del pitcher (necesario para evitar el valor numérico de '0' en function collisions)

let ballSpeed = 5; // velocidad de movimiento de la bola
let blitzSpeed = 5; // velocidad de movimiento del blitz
let batterSpeed = 20; // velocidad de movimiento del batter
let pitcherSpeed = 3; // velocidad de movimiento del

let gameBoxWidth = 490;
let gameBoxHeight = 795;

let batterRightMovement = true;
let batterLeftMovement = true;
let pitcherRightMovement = true;
let pitcherLeftMovement = true;

let isGameOn = true;




function playersMovement () { // función encargada del pitcher
    // Movimiento horizontal y vertical de: ball y blitz
    ballY += ballSpeed;
    ballNode.style.top = `${ballY}px`; // Movimiento arriba hacia abajo

    blitzY += blitzSpeed;
    blitzNode.style.top = `${blitzY}px`; // Movimiento arriba hacia abajo*/


    // condicional para el efecto rebote del batter
    /*if (batterRightMovement === true) { 
        batterX += batterSpeed;
    } else {
        batterX -= batterSpeed;
    }
    batterNode.style.left = `${batterX}px`; // Movimiento de izquierda a derecha del batter

    if (batterRightMovement) {
        pitcherX += pitcherSpeed;
    } else if (batterLeftMovement) {
        batterX -= batterSpeed;
    }
    batterNode.style.left = `${pitcherX}px`; // Movimiento de derecha a izquierda del pitcher*/

    //-----------------------------
    


    //---------------------------



    if (pitcherRightMovement === true) {
        pitcherX += pitcherSpeed;
    } else {
        pitcherX -= pitcherSpeed;
    }
    pitcherNode.style.left = `${pitcherX}px`; // Movimiento de derecha a izquierda del pitcher

    if (pitcherRightMovement) {
        pitcherX += pitcherSpeed;
    } else if (pitcherLeftMovement) {
        pitcherX -= pitcherSpeed;
    }
    pitcherNode.style.left = `${pitcherX}px`; // Movimiento de derecha a izquierda del pitcher
}






function collisions() { // Verificar colisiones con los límites del juego
    /*if (ballY > gameBoxHeight) {
        //console.log('ball collision');

    } if (blitzY > gameBoxHeight) {
        //console.log('blitz collision');

    }*/ if (batterX > gameBoxWidth) {
        //console.log('batter collision');
        batterRightMovement = false;

    } if (pitcherX > gameBoxWidth) {
        //console.log('pitcher collision');
        pitcherRightMovement = false;
        pitcherLeftMovement = true;
    } else if (pitcherX < pitcherMinusX) {
        pitcherRightMovement = true;
        pitcherLeftMovement = false;
    }
};

//funcion para verificar la colision de ball y blitz en la parte inferior
function batterCollision () {
    if (ballY + 20 > batterY && 
        ballX > batterX && 
        ballX + 20 < batterX + 120) {
        //console.log('ball collision2');
    } if (blitzY + 20 > batterY) {
        //console.log('blitz collision2');
    }
}



const startGame = () => {
    splashScreenNode.style.display = "none";
    fieldImageNode.style.display = "none";
    gameScreenNode.style.display = "flex";



    let gameObject = new Game();
    console.log(gameObject);

    gameObject.gameLoop();

}


//




// eventListeners
startBtnNode.addEventListener("click", startGame);