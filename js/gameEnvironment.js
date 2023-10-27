class Game {
  constructor() {
    this.isGameOn = true;

    this.player = new Player();
    this.pitcher = new Pitcher();
    this.ballArr = [];
    this.blitzArr = [];

    this.timer = 0; // 60/seg.
  }

  ballAppear = () => {
    if (this.timer % 120 === 0) {
      let randomPosition = Math.random() * -100; // -100 y 0

      let newBall = new Ball("Left", randomPosition);
      this.ballArr.push(newBall);
    }
  };

  blitzAppear = () => {
    if (this.timer % 120 === 0) {
      let randomPosition = Math.random() * -50;

      let newBlitz = new Blitz("Left", randomPosition);
      this.blitzArr.push(newBlitz);
    }
  };

  // HACER DESAPARECER LAS BALLS
  ballDisappear = () => {
    if (this.ballArr[0].ballX < 0) {
      this.ballArr[0].ballNode.remove(); // remueve el nodo del DOM
      this.ballArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
    }
  };

  // HACER DESAPARECER LOS BLITZES
  blitzDisappear = () => {
    if (this.blitzArr[0].blitzX < 0) {
      this.blitzArr[0].blitzNode.remove(); // remueve el nodo del DOM
      this.blitzArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
    }
  };

  collisionCheckBlitz = () => {
    this.blitzArr.forEach((eachBlitz) => {
      if (
        eachBlitz.blitzX < this.batterX + this.batterW &&
        eachBlitz.blitzX + eachBlitz.blitzW > this.batterX &&
        eachBlitz.blitzY + this.batterY > this.batterH &&
        eachBlitz.blitzY + eachBlitz.blitzH > this.batterY
      ) {
        // console.log ('collision batter blitz');
        this.gameOver();
      }
    });
  };


  gameLoop = () => {
    this.ballArr.forEach((eachBall) => {
      eachBall.automaticMovement();
    });

    this.blitzArr.forEach((eachBlitz) => {
      eachBlitz.automaticMovement();
    });

    this.ballAppear();
    this.ballDisappear();

    this.blitzAppear();
    this.blitzDisappear();

    this.collisionCheckBlitz();

    //movement();
    // this.player.movement (); // movimiento del batter!!!
    this.pitcher.movement();

    this.player.wallCollisions();
    this.pitcher.wallCollisions();

    // recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  // AJUSTAR!!!
  // gameOver = () => {
  //     // 1. la recursion deberia terminar
  //     this.isGameOn = false;
  //     // 1.1 si tenemos intervalos deberiamos limpiarlos
  //     // 2. ocultar pantalla d ejuego
  //     gameScreenNode.style.display = 'none';
  //     //3. mostrar pantalla de Game Over
  //     gameOverScreenNode.style.display = 'flex';
  //   }

  //   collisionBallFloor = () => {
  //     if (this.ball.ballY > 750) {
  //         this.gameOver();
  //     }
  //   }

  //   collisionBlitzFloor = () => {
  //     if (this.blitz.blitzY > 750) {
  //         this.gameOver();
  //     }
  //   }
}

// BONUS
// efecto de choque de la bola con el jugador
// efecto de homerun
// efecto de golpe de rayo
// contador de vida y gameover
// aumneto de velocidad con el tiempo
