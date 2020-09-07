var playerName

getPlayerName();

function getPlayerName() {
playerName = prompt ("What is your name?")
//local storage this
while (playerName = " ") {
    alert ("please enter name")
    playerName = prompt ("What is your name?")
}
}

//Show High Scores
showHighscores();
function displayHighscores() {
    document.getElementById("playerName").innerHTML = localStorage.getItem("Name");
    document.getElementById("playerScores").innerHTML = localStorage.getItem("Score");
  }
  
  