// console.log('probe blitz js');

class Blitz {
  constructor(type, yPosition) {
    this.blitzNode = document.createElement("img");

    if (type === "top") {
      this.blitzNode.src = "./Bilder/blitz.png";
    } else {
      this.blitzNode.src = "./Bilder/blitz.png";
    }

    gameBoxNode.append(this.blitzNode);
    this.blitzW = 50;
    this.blitzH = 50;
    this.blitzX = Math.random() * 400;
    this.blitzY = yPosition;

    //DOM
    this.blitzNode.style.width = `${this.blitzW}px`;
    this.blitzNode.style.height = `${this.blitzH}px`;
    this.blitzNode.style.position = "absolute";
    this.blitzNode.style.left = `${this.blitzX}px`;
    this.blitzNode.style.top = `${this.blitzY}px`;

    this.speed = 3;
  }

  automaticMovement = () => {
    this.blitzY += this.speed;
    this.blitzNode.style.top = `${this.blitzY}px`;
  };
}
