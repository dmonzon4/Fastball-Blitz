// class Ball {
//     constructor () {
//         //ball
//         this.ballY = 10;
//         this.ballX = 10;
//         this.ballSpeed = 5;
//         this.ballNode = document.querySelector("#ball");
//     }


//     movement = () => {
//         //ball
//         this.ballY += this.ballSpeed;
//         this.ballNode.style.top = `${this.ballY}px`; // Movimiento arriba hacia abajo

        
//         if (this.ballY + 20 > this.batterY && 
//             this.ballX > this.batterX && 
//             this.ballX + 20 < this.batterX + 120) {
//             //console.log('ball collision2');
//         } 
//     }
    
// }












class Ball {
    constructor (type, yPosition) {
        this.ballNode = document.createElement("img");

        if (type === 'top') {
            this.ballNode.src = "./Bilder/ball.png";
        } else {
            this.ballNode.src = "./Bilder/ball.png";
        }
        
        gameBoxNode.append(this.ballNode);
        this.ballW = 25;
        this.ballH = 25;
        this.ballX = 10;
        this.ballY = yPosition;

        //DOM
        this.ballNode.style.width = `${this.ballW}px`;
        this.ballNode.style.height = `${this.ballH}px`;
        this.ballNode.style.position = "absolute";
        this.ballNode.style.left = `${this.ballX}px`;
        this.ballNode.style.top = `${this.ballY}px`;

        this.speed = 2;
    }

    automaticMovement = () => {
        this.ballX -= this.speed;
        this.ballNode.style.height = `${this.ballH}px`;
    }

    
}