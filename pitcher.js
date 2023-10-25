

class Pitcher {
    constructor () {
        //pitcher
        this.pitcherX = 0;
        this.pitcherMinusX = 0;
        this.pitcherSpeed = 3;
        this.pitcherRightMovement = true;
        this.pitcherLeftMovement = true;
        this.pitcherNode = document.querySelector("#pitcher");
    }


    movement = () => {
        //pitcher
        if (this.pitcherRightMovement === true) {
            this.pitcherX += this.pitcherSpeed;
        } else {
            this.pitcherX -= this.pitcherSpeed;
        }
        this.pitcherNode.style.left = `${this.pitcherX}px`; // Movimiento de derecha a izquierda del pitcher
    
        if (this.pitcherRightMovement) {
            this.pitcherX += this.pitcherSpeed;
        } else if (this.pitcherLeftMovement) {
            this.pitcherX -= this.pitcherSpeed;
        }
        this.pitcherNode.style.left = `${this.pitcherX}px`;
    }

    wallCollisions = () => {
        if (this.pitcherX > gameBoxWidth) {
            //console.log('pitcher collision');
            this.pitcherRightMovement = false;
        } else if (this.pitcherX < this.pitcherMinusX) {
            this.pitcherRightMovement = true;
        }
        
    }
    
}
