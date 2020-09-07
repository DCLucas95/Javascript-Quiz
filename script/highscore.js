var playerName

getPlayerName();

function getPlayerName() {
var playerName = prompt ("What is your name?")
localStorage.setItem("playerName", playerName)
}

//Show High Scores
displayHighscores();

function displayHighscores() {
    document.getElementById("name").innerHTML = localStorage.getItem("playerName");
    document.getElementById("score").innerHTML = localStorage.getItem("score");
  }

//button to clear local storage
var clearScores = document.querySelector(".clearScores")

clearScores.addEventListener("click", clearLocalStorage);

function clearLocalStorage(){
    window.localStorage.clear();
    console.log("scores cleared")
}

  