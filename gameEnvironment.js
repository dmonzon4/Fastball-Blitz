console.log("probe");

class Game {
    constructor() {
        // cosas dentro del juego

            // batter
                // velocidad de movimiento
            // pitcher
                // velocidad de movimiento
            // ball
                // velocidad de movimiento
        this.timer = 0; // 60/seg.
    }

        // acciones dentro del juego
            // hitting
            // movimiento del campo
            // lanzamiento de bola
            //lanzamiento de rayo

        // colision de bola
        // colision del rayo

        // gameloop
    gameLoop = () => {
        //console.log("gameLoop");
        this.timer ++;


        // Movimiento horizontal y vertical de: ball, blitz, batter, pitcher
        ballX += 5;
        ballNode.style.top = `${ballX}px`; // Movimiento arriba hacia abajo

        blitzX += 5;
        blitzNode.style.top = `${blitzX}px`; // Movimiento arriba hacia abajo

        batterX += 2;
        batterNode.style.left = `${batterX}px`; // Movimiento de izquierda a derecha

        pitcherX -= 2;
        pitcherNode.style.left = `${pitcherX}px`; // Movimiento de derecha a izquierda


        // recursion
        requestAnimationFrame(this.gameLoop);
    }

}

/*function gameLoop2() {
    //console.log("gameLoop2");

    

    requestAnimationFrame(gameLoop2);
}

gameLoop2();*/




// BONUS
    // efecto de choque de la bola con el jugador
        // efecto de homerun
    // efecto de golpe de rayo
        // contador de vida y gameover
    // aumneto de velocidad con el tiempo
