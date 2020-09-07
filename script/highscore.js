
getPlayerName();

function getPlayerName() {
var playerName = prompt ("What is your name?")
//local storage this

}

//Show High Scores

//retrieve score and use input from prompt to get name

//button to clear local storage
var clearScores = document.querySelector(".clearScores")

clearScores.addEventListener("click", clearLocalStorage);

function clearLocalStorage(){
    window.localStorage.clear();
    console.log("scores cleared")
}
  