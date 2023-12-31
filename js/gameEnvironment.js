class Game {
  constructor() {
    this.isGameOn = true;

    this.player = new Player();
    this.pitcher = new Pitcher();
    this.ballArr = [];
    this.blitzArr = [];

    this.timer = 0; // 60/seg.

    this.score = 0;
    this.bonus = 1;

    this.lives = 3;
    this.damage = 1;

    this.GameOn = this.score > 0; // ?????
  }

  playMusic() {
    const musicElement = document.querySelector("#splash-screen-audio");
    musicElement.volume = 0.1;
    musicElement.currentTime = 0;
    musicElement.play();
  }

  stopMusic() {
    const musicElement = document.querySelector("#splash-screen-audio");
    musicElement.pause();
  }

  gameOverMusic () {
    const gameOverElement = document.querySelector("#game-over-music");
    gameOverElement.volume = 0.7;
    gameOverElement.play();
  }
  

  ballSound = () => {
    const ballImpact = document.querySelector("#ball-sound");
    ballImpact.volume = 0.9;
    ballImpact.play();
  };

  blitzSound = () => {
    const blitzImpact = document.querySelector("#blitz-sound");
    blitzImpact.volume = 0.9;
    blitzImpact.play();
  };

  ballAppear = () => {
    if (this.timer % 60 === 0) {
      let randomPosition = Math.random() * -100; // -100 y 0

      let newBall = new Ball(randomPosition);
      this.ballArr.push(newBall);
    }
  };

  blitzAppear = () => {
    if (this.timer % 120 === 0) {
      let randomPosition = Math.random() * -100;

      let newBlitz = new Blitz("Left", randomPosition);
      this.blitzArr.push(newBlitz);
    }
  };

  //------------------------------------------------------------------------------------------------------

  // // HACER DESAPARECER LAS BALLS
  // ballDisappear = () => {
  //   if (this.ballArr[0].ballX < 0) {
  //     this.ballArr[0].ballNode.remove(); // remueve el nodo del DOM
  //     this.ballArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
  //   }
  // };

  // // HACER DESAPARECER LOS BLITZES
  // blitzDisappear = () => {
  //   if (this.blitzArr[0].blitzX < 0) {
  //     this.blitzArr[0].blitzNode.remove(); // remueve el nodo del DOM
  //     this.blitzArr.shift(); // lo elimina del array para que no se siga moviendo o colisionando
  //   }
  // };


  ballDisappear = () => {
    this.ballArr = this.ballArr.filter(eachBall => eachBall.ballX >= 0);
  };
  
  blitzDisappear = () => {
    this.blitzArr = this.blitzArr.filter(eachBlitz => eachBlitz.blitzX >= 0);
  };
  // -----------------------------------------------------------------------------------------------------------

  collisionCheckBall = () => {
    this.ballArr.forEach((eachBall) => {
      if (
        eachBall.ballX < this.player.batterX + this.player.batterW &&
        eachBall.ballX + eachBall.ballW > this.player.batterX &&
        eachBall.ballY + this.player.batterY > this.player.batterH &&
        eachBall.ballY + eachBall.ballH > this.player.batterY
      ) {
        this.score += this.bonus;
        console.log("sumando");
        this.ballArr[0].ballNode.remove();
        this.ballArr.shift();
        this.updateScore();
        this.ballSound();
      }
    });
  };

  collisionCheckBlitz = () => {
    this.blitzArr.forEach((eachBlitz) => {
      if (
        eachBlitz.blitzX < this.player.batterX + this.player.batterW &&
        eachBlitz.blitzX + eachBlitz.blitzW > this.player.batterX &&
        eachBlitz.blitzY + this.player.batterY > this.player.batterH &&
        eachBlitz.blitzY + eachBlitz.blitzH > this.player.batterY
      ) {
        this.lives -= this.damage;
        console.log("restando");
        this.updateLives();

        this.blitzArr[0].blitzNode.remove();
        this.blitzArr.shift();
        this.blitzSound();

        if (this.lives === 0) {
          this.gameOver();
        }
      }
    });
  };

  updateScore() {
    const scoreElement = document.querySelector("#score");
    scoreElement.innerText = this.score;
  }

  updateLives() {
    const livesElement = document.querySelector("#lives");
    livesElement.innerText = this.lives;
  }

  gameOver = () => {
    if (this.lives === 0) {
      gameScreenNode.style.display = "none";
      gameOverScreen.style.display = "flex";
      batsImageNode.style.display = "flex";
      this.stopMusic();
      this.gameOverMusic();
    }
  };

  gameLoop = () => {
    // if (this.isGameOn === false) {
    //   return; // Si el juego ya no está activo, sal del loop
    // }
  
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
    this.collisionCheckBall();

    //movement();
    // this.player.movement (); // movimiento del batter (no borrar!!!)
    this.pitcher.movement();

    this.player.wallCollisions();
    this.pitcher.wallCollisions();

    // recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

