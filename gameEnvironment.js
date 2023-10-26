console.log("probe");


class Game {
    constructor() {
        this.isGameOn = true;
        
        this.player = new Player ();
        this.pitcher = new Pitcher ();
        // this.ball = new Ball (); // propiedades antiguas
        // this.blitz = new Blitz (); // propiedades antiguas
        // this.oneBall = new Ball ();
        // this.oneBlitz = new Blitz (); 

        this.ballArr = [];
        this.blitzArr = [];
    
        this.timer = 0; // 60/seg.
    }

    ballAppear = () => {
    // determinar cuando voy a agregar elementos al array
        if (this.timer % 120 === 0) {

            let randomPosition = Math.random() * -700; // -100 y 0

            let newBall = new Ball("top", randomPosition);
            this.ballArr.push(newBall);

            let newBallBottom = new Ball("Bottom", randomPosition + 800);
            this.ballArr.push(newBallBottom);

            console.log(this.ballArr.length);
        }

    };
    
    blitzAppear = () => {
        // determinar cuando voy a agregar elementos al array
            if (this.timer % 120 === 0) {
    
                let randomPosition = Math.random() * -700; // -100 y 0
    
                let newBlitz = new Blitz("top", randomPosition);
                this.blitzArr.push(newBlitz);
    
                let newBlitzBottom = new Blitz("Bottom", randomPosition + 800);
                this.blitzArr.push(newBlitzBottom);
    
                console.log(this.blitzArr.length);
            }
    
        };



    // HACER DESAPARECER LAS BALLS
    ballDisappear = () => {
        if (this.ballArr[0].ballX < 0) {
            // this.obstacleArr.splice(0,1); // otra opcion a lo que sigue abajo
            this.ballArr[0].ballNode.remove(); // remueve el nodo del DOM
            this.ballArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
        }
    }
        
    // HACER DESAPARECER LOS BLITZES
    blitzDisappear = () => {
        if (this.blitzArr[0].blitzX < 0) {
            // this.obstacleArr.splice(0,1); // otra opcion a lo que sigue abajo
            this.blitzArr[0].blitzNode.remove(); // remueve el nodo del DOM
            this.blitzArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
        }
    }
    


    collisionCheckBall = () => {
        this.ballArr.forEach((eachBall) => {
            if (eachBall.ballX < this.batterX + this.batterX &&
            eachBall.ballX + eachBall.ballW > this.batterX &&
            eachBall.ballY + eachBall.ballY > this.batterX &&
            eachBall.ballX + eachBall.ballH > this.batterX) { 
            console.log ('collision batter ball');
            this.gameOver();
            }
        });
    }

    collisionCheckBlitz = () => {
        this.blitzArr.forEach((eachBlitz) => {
            if (eachBlitz.blitzX < this.batterX + this.batterX &&
            eachBlitz.blitzX + eachBlitz.blitzW > this.batterX &&
            eachBlitz.blitzY + eachBlitz.blitzY > this.batterX &&
            eachBlitz.blitzX + eachBlitz.blitzH > this.batterX) { 
            console.log ('collision batter blitz');
            this.gameOver();
            }
        });
    }

        

        // gameloop
    gameLoop = () => {
        //console.log("gameLoop");
        this.ballArr.forEach((eachBall) => {
            eachBall.automaticMovement ();
        });
        
        

        this.blitzArr.forEach((eachBlitz) => {
            eachBlitz.automaticMovement ();
        });

        this.ballAppear();
        this.collisionCheckBall();
        this.ballDisappear();
        

        this.blitzAppear();
        this.collisionCheckBlitz();
        this.blitzDisappear();


        //movement();
        this.player.movement (); // mvieminto del batter
        this.pitcher.movement (); // moviemiento del pitcher
        // this.ball.movement (); // moviemiento antiguo
        // this.blitz.movement (); // moviemiento antiguo
        // this.oneBall.automaticMovement ();


        this.player.wallCollisions ();
        this.pitcher.wallCollisions ();
        //collisions (); // invocando función del movimiento de la bola, blitz, batter, pitcher
        

        //batterCollision();
        
        // recursion
        this.timer ++;
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
    
      collisionBallFloor = () => {
        if (this.ball.ballY > 750) {
            this.gameOver();
        }
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
