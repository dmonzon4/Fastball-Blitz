let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let ballNode = document.querySelector("#ball");
let blitzNode = document.querySelector("#blitz");
let batterNode = document.querySelector("#batter");
let pitcherNode = document.querySelector("#pitcher");



// variables globales
let ballX = 10;
let blitzX = 10;
let batterX = 10;
let pitcherX = 450;


// functions
const startGame = () => {
    splashScreenNode.style.display = "none";
    fieldImageNode.style.display = "none";
    gameScreenNode.style.display = "flex";



    let gameObject = new Game();
    console.log(gameObject);

    gameObject.gameLoop();

}


//




// eventListeners
startBtnNode.addEventListener("click", startGame);