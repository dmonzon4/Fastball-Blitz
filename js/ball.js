class Ball {
  constructor(xPosition) {
    this.ballNode = document.createElement("img");
    this.ballNode.src = "./Bilder/ball.png";

    gameBoxNode.append(this.ballNode);
    this.ballW = 25;
    this.ballH = 25;
    this.ballX = Math.random() * 400;
    this.ballY = xPosition;

    //DOM
    this.ballNode.style.width = `${this.ballW}px`;
    this.ballNode.style.height = `${this.ballH}px`;
    this.ballNode.style.position = "absolute";
    this.ballNode.style.left = `${this.ballX}px`;
    this.ballNode.style.top = `${this.ballY}px`;

    this.speed = 2;
  }

  automaticMovement = () => {
    this.ballY += this.speed;
    this.ballNode.style.top = `${this.ballY}px`;
  };
}
