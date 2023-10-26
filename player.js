console.log('probe player');



//crear objetos de los jugadores con sus propiedades a definidas 'let'
    //asignar imagen y medidas X y Y

class Player {
    constructor () {
        //batter
        this.batterX = 460; // posición inicial
        this.batterMinusX = 0;
        this.batterSpeed = 5;
        this.batterRightMovement = true;
        this.batterLeftMovement = true;
        this.batterNode = document.querySelector("#batter");

    }

    movement = () => {
        //batter
        if (this.batterRightMovement === true) { // ejemplo
            this.batterX += this.batterSpeed;
        } else {
            this.batterX -= this.batterSpeed;
        }
        this.batterNode.style.left = `${this.batterX}px`; // Movimiento de derecha a izquierda del batter

        


        // if (this.rightMovement) {
        //     this.x += this.speed;
        // } else if (this.leftMovement) {
        //     this.x -= this.speed;
        // }
        // this.node.style.left = `${this.x}px`; // Movimiento de derecha a izquierda del pitcher
    }


    wallCollisions = () => {
        if (this.batterX > gameBoxWidth -30) { // límite der.
            //console.log('batter collision');
            this.batterRightMovement = false;
        } else if (this.batterX < this.batterMinusX) {
            this.batterRightMovement = true;
        }
        
    }

}

