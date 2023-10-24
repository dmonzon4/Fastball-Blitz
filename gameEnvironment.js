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



        playersMovement();
        collisions (); // invocando función del movimiento de la bola, blitz, batter, pitcher

        batterCollision();
        
        // recursion
        //if (isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
    }

}


// addEventListeners
// control del batter con las teclas
document.addEventListener('keydown', (event) => {
    //console.log('presionando una tecla'); // verificando que la consola reconoce la orden 
    console.log(event.code); // auch: 'event.key' indica que tecla se está presionando
    if (event.code === 'KeyA' && batterX > -1) { // indica la tecla para la izq. y el limite izq. del gamebox para el batter
        //console.log('moviendo a la izq.');

        batterX -= batterSpeed;
        batterNode.style.left = `${batterX}px`;
    } else if (event.code === 'KeyD' && batterX < gameBoxWidth - 10) { // indica la tecla para la der. y el limite der. del gamebox para el batter
        //console.log('moviendo a la der.');
        batterX += batterSpeed;
        batterNode.style.left = `${batterX}px`;
    }
});






// BONUS
    // efecto de choque de la bola con el jugador
        // efecto de homerun
    // efecto de golpe de rayo
        // contador de vida y gameover
    // aumneto de velocidad con el tiempo
