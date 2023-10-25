console.log("probe");

class Game {
    constructor() {
        this.isGameOn = true;
        
        this.player = new Player ();
        this.pitcher = new Pitcher ();
        // this.ball = new Ball (); // propiedades antiguas
        // this.blitz = new Blitz (); // propiedades antiguas
        this.oneBall = new Ball ();
        this.oneBlitz = new Blitz (); 

        this.ballArr = [];
        this.blitzArr = [];
    
        this.timer = 0; // 60/seg.
    }

    ballAppear = () => {
    // determinar cuando voy a agregar elementos al array
    if (this.timer % 120 === 0) {

        let randomPosition = Math.random() * 50; // -100 y 0

        let newBall = new Ball("left", randomPosition);
        this.ballArr.push(newBall);

        let newBallRight = new Blitz("right", randomPosition + 300);
        this.ballArr.push(newBallRight);

        console.log(this.ballArr.length);
    }

    };
    
    // HACER DESAPARECER LAL BALLS
    blitzDisappear = () => {
        if (this.blitzArr[0].x < 0) {
            // this.obstacleArr.splice(0,1); // otra opcion a lo que sigue abajo
            this.blitzArr[0].node.remove(); // remueve el nodo del DOM
            this.blitzArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
        }
    }

    ballAppear = () => {
        // determinar cuando voy a agregar elementos al array
        if (this.timer % 120 === 0) {
    
            let randomPosition = Math.random() * 75; // -100 y 0
    
            let newBlitz = new Ball("right", randomPosition);
            this.blitzArr.push(newBlitz);
    
            let newBlitzleft = new Blitz("left", randomPosition + 350);
            this.ballArr.push(newBlitzleft);
    
            console.log(this.blitzArr.length);
        }
    
        };
        
        // HACER DESAPARECER LOS BLITZES
        blitzDisappear = () => {
            if (this.blitzArr[0].x < 0) {
                // this.obstacleArr.splice(0,1); // otra opcion a lo que sigue abajo
                this.blitzArr[0].node.remove(); // remueve el nodo del DOM
                this.blitzArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
            }
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


        
        //movement();
        this.player.movement (); // mvieminto del batter
        this.pitcher.movement (); // moviemiento del pitcher
        // this.ball.movement (); // moviemiento antiguo
        // this.blitz.movement (); // moviemiento antiguo
        this.oneBall.automaticMovement ();

        


        this.player.wallCollisions ();
        this.pitcher.wallCollisions ();
        //collisions (); // invocando función del movimiento de la bola, blitz, batter, pitcher
        


        //batterCollision();
        
        // recursion
        if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
        }
    }






    // AJUSTAR!!!
    gameOver = () => {
        // 1. la recursion deberia terminar
        this.GameOn = false;
        // 1.1 si tenemos intervalos deberiamos limpiarlos
        // 2. ocultar pantalla d ejuego
        gameScreenNode.style.display = 'none';
        //3. mostrar pantalla de Game Over
        gameOverScreenNode.style.display = 'flex';
      }
    
      collisionBlitzFloor = () => {
        if (this.blitz.blitzY > 750) {
            this.gameOver();
        }
      }

}









// BONUS
    // efecto de choque de la bola con el jugador
        // efecto de homerun
    // efecto de golpe de rayo
        // contador de vida y gameover
    // aumneto de velocidad con el tiempo
