//Source of questions for the quiz
var questions = quizQuestions

//score
var score = 0;

//Identifier of button to start the quiz
var startButton = document.querySelector(".startButton")

// index of the current question and aswers in the questions array (start from the first)
var currentQuestion = 0;
var questionHtml = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

//countdown timer
var countdowntimer
var secondsLeft = 90;

function startTimer() {

  renderQuestion();

  countdowntimer = setInterval(function() {
    secondsLeft=secondsLeft-1

    var showTimer = document.getElementById("countdownTimer");
    showTimer.textContent = secondsLeft
    
    if(secondsLeft <= 0) {
      clearInterval(countdowntimer);
      window.location.href = "scores.html";
    }
  }, 1000);
}

//Button to start Quiz and Timer
startButton.addEventListener("click", startTimer);

// this function will display question and possible answers
function renderQuestion() {
  var questionObject = questions[currentQuestion];
  //displaying question
  questionHtml.textContent = questionObject.question;

  //displaying answers
  answer1.textContent = questionObject.answers[0];
  answer2.textContent = questionObject.answers[1];
  answer3.textContent = questionObject.answers[2];
  answer4.textContent = questionObject.answers[3];
}

// when the user clicks on one of the answers this function will be executed
function selectAnswer(answerNumber) {
  console.log('user answered ' + answerNumber);
  var questionObject = questions[currentQuestion];

  if (questionObject.correct === answerNumber) {
    console.log('answer is correct!');
    document.getElementById("score").innerHTML = score+=10;

    //sound and glash green
  } else {
    console.log('answer is incorrect!');
    secondsLeft -=10
    //sound and flash red
    //JSON stringify score and putinto session storage
  }
  console.log(currentQuestion, questions.length);

  // display next question if there is one
  if (currentQuestion >= questions.length - 1) {
    console.log('that was the last question');
    window.location.href = "scores.html";
  } else {
    currentQuestion++;
    renderQuestion();
  }
}


