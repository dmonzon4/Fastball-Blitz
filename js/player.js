class Player {
  constructor() {
	this.batterNode = document.createElement("img");
  this.batterNode.src = './Bilder/batter.png';
    
   
	gameBoxNode.append(this.batterNode);
	this.batterW = 70;
	this.batterH = 70;
	this.batterX = 200;
	this.batterY = 700;
	this.batterSpeed = 20;

  this.batterRightMovement = true;
  this.batterLeftMovement = true;

  this.batterMinusX = 0;
    


  this.batterNode.style.width = `${this.batterW}px`;
  this.batterNode.style.height = `${this.batterH}px`;
  this.batterNode.style.position = "absolute";
  this.batterNode.style.left = `${this.batterX}px`;
  this.batterNode.style.top = `${this.batterY}px`;
  }

  // movement = () => {
  //     //batter
  //     if (this.batterRightMovement === true) { // ejemplo
  //         this.batterX += this.batterSpeed;
  //     } else {
  //         this.batterX -= this.batterSpeed;
  //     }
  //     this.batterNode.style.left = `${this.batterX}px`; // Movimiento de derecha a izquierda del batter

  wallCollisions = () => {
    if (this.batterX > gameBoxWidth - 30) {
      // límite der.
      //console.log('batter collision');
      this.batterRightMovement = false;
    } else if (this.batterX < this.batterMinusX) {
      this.batterRightMovement = true;
    }
  };
}