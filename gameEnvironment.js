console.log("probe");

class Game {
    constructor() {
        this.isGameOn = true;
        this.player = new Player ();
        //this.elements = new Elements ();
        // cosas dentro del juego

    
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


        /*// Calcula el tiempo actual en milisegundos
        const currentTime = performance.now();

        // Verifica si es el momento de crear un nuevo elemento
        if (currentTime - this.lastElementTime >= (this.isCreatingBall ? this.ballInterval : this.blitzInterval)) {
            if (this.isCreatingBall) {
            createBall();
            } else {
            createBlitz();
            }

            this.isCreatingBall = !this.isCreatingBall; // Alternar entre bolas y blitze
            this.lastElementTime = currentTime;
        }

        // Mueve las bolas y blitze existentes
        moveBallsAndBlitzes();*/



        //movement();
        this.player.movement (); // class Player
        //this.elements.movement2 (); // class Elements
        this.player.wallCollisions ();
        //collisions (); // invocando función del movimiento de la bola, blitz, batter, pitcher

        //batterCollision();
        
        // recursion
        if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
        }
    }

}









// BONUS
    // efecto de choque de la bola con el jugador
        // efecto de homerun
    // efecto de golpe de rayo
        // contador de vida y gameover
    // aumneto de velocidad con el tiempo
