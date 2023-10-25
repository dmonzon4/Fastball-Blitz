console.log('probe player');



//crear objetos de los jugadores con sus propiedades a definidas 'let'
    //asignar imagen y medidas X y Y

class Player {
    constructor () {
        //batter
        this.batterX = 460; // posición inicial
        this.batterMinusX = 0;
        this.batterSpeed = 7;
        this.batterRightMovement = true;
        this.batterLeftMovement = true;
        this.batterNode = document.querySelector("#batter");

        //pitcher
        this.pitcherX = 0;
        this.pitcherMinusX = 0;
        this.pitcherSpeed = 3;
        this.pitcherRightMovement = true;
        this.pitcherLeftMovement = true;
        this.pitcherNode = document.querySelector("#pitcher");

        //ball
        this.ballY = 10;
        this.ballX = 10;
        this.ballSpeed = 5;
        this.ballNode = document.querySelector("#ball");

        //blitz
        this.blitzY = 10;
        this.blitzX = 10;
        this.blitzSpeed = 5;
        this.blitzNode = document.querySelector("#blitz");

        /*//extras
        this.ballsAr = [];
        this.blitzesAr = [];
        this.lastElementTime = 0;
        this.isCreatingBall = true; // Comienza creando una bola
        this.ballInterval = 1000;
        this.blitzInterval = 1000;*/


    }

    movement = () => {
        //batter
        if (this.batterRightMovement === true) { // ejemplo
            this.batterX += this.batterSpeed;
        } else {
            this.batterX -= this.batterSpeed;
        }
        this.batterNode.style.left = `${this.batterX}px`; // Movimiento de derecha a izquierda del batter

        //pitcher
        if (this.pitcherRightMovement === true) {
            this.pitcherX += this.pitcherSpeed;
        } else {
            this.pitcherX -= this.pitcherSpeed;
        }
        this.pitcherNode.style.left = `${this.pitcherX}px`; // Movimiento de derecha a izquierda del pitcher
    
        if (this.pitcherRightMovement) {
            this.pitcherX += this.pitcherSpeed;
        } else if (this.pitcherLeftMovement) {
            this.pitcherX -= this.pitcherSpeed;
        }
        this.pitcherNode.style.left = `${this.pitcherX}px`;
    
        //ball & blitz
        this.ballY += this.ballSpeed;
        this.ballNode.style.top = `${this.ballY}px`; // Movimiento arriba hacia abajo

        this.blitzY += this.blitzSpeed;
        this.blitzNode.style.top = `${this.blitzY}px`; // Movimiento arriba hacia abajo*/

        if (this.ballY + 20 > this.batterY && 
            this.ballX > this.batterX && 
            this.ballX + 20 < this.batterX + 120) {
            //console.log('ball collision2');
        } if (this.blitzY + 20 > this.batterY) {
            //console.log('blitz collision2');
        }


        // if (this.rightMovement) {
        //     this.x += this.speed;
        // } else if (this.leftMovement) {
        //     this.x -= this.speed;
        // }
        // this.node.style.left = `${this.x}px`; // Movimiento de derecha a izquierda del pitcher
    }


    wallCollisions = () => {
        if (this.batterX > gameBoxWidth -30) { // límite der.
            //console.log('batter collision');
            this.batterRightMovement = false;
        } else if (this.batterX < this.batterMinusX) {
            this.batterRightMovement = true;
        }

        if (this.pitcherX > gameBoxWidth) {
            //console.log('pitcher collision');
            this.pitcherRightMovement = false;
        } else if (this.pitcherX < this.pitcherMinusX) {
            this.pitcherRightMovement = true;
        }
        
    }
}

/*// Función para crear bolas y blitzes
function createBall() {
    const ballClone = this.ballNode.cloneNode(true);
    ballClone.style.left = `${this.pitcherX}px`;
    gameBoxNode.appendChild(ballClone);

    const initialY = 0;
    ballClone.style.top = `${initialY}px`;
    this.ballsAr.push(ballClone);
}

// Función para crear un nuevo blitz
function createBlitz() {
    const blitzClone = this.blitzNode.cloneNode(true);
    blitzClone.style.left = `${this.pitcherX}px`;
    gameBoxNode.appendChild(blitzClone);

    const initialY = 0;
    blitzClone.style.top = `${initialY}px`;
    this.blitzesAr.push(blitzClone);
}

// Lógica de movimiento para las bolas y blitze
function moveBallsAndBlitzes() {
    // Mueve las bolas existentes
    for (let i = 0; i < this.ballsAr.length; i++) {
    const ball = this.ballsAr [i];
    const ballD = parseInt(ball.style.top, 10);
    ball.style.top = `${ballD + this.ballSpeed}px`;
    }

    // Mueve los blitze existentes
    for (let i = 0; i < this.blitzesAr.length; i++) {
    const blitz = this.blitzesAr [i];
    const blitzD = parseInt(blitz.style.top, 10);
    blitz.style.top = `${blitzD + this.blitzSpeed}px`;
    }
}*/