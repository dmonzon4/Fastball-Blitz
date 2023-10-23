let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let fieldImageNode = document.querySelector("#field-image");
let gameScreenNode = document.querySelector("#game-screen");






// functions
const startGame = () => {
    splashScreenNode.style.display = "none";
    fieldImageNode.style.display = "none";
    gameScreenNode.style.display = "flex";



    let gameObject = new Game();
    console.log(gameObject);

    gameObject.gameLoop();

}







// eventListeners
startBtnNode.addEventListener("click", startGame);