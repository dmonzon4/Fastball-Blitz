console.log('probe player');


class Player {
    constructor () {
        //batter
        this.batterX = 200;
        this.batterMinusX = 0;
        this.batterSpeed = 20;
        this.batterRightMovement = true;
        this.batterLeftMovement = true;
        this.batterNode = document.querySelector("#batter");

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
        if (this.batterX > gameBoxWidth -30) { // límite der.
            //console.log('batter collision');
            this.batterRightMovement = false;
        } else if (this.batterX < this.batterMinusX) {
            this.batterRightMovement = true;
        }
        
    }

}

