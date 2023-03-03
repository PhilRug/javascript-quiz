var choicesEl = document.getElementById("choices");
var timerInterval;
var deductInterval;
const quiz = [
  {
    question: "What is not a coding language?",
    answers: ["1. C+-", "2. CSS", "3. Javascript", "4. HTML"],
    correct: "1. C+-",
  },
  {
    question: "How do you create a link?",
    answers: ["1. <p>", "2. <a href>", "3. <li>", "4. <h1>"],
    correct: "2. <a href>",
  },
  {
    question: "Where would you sort variables in CSS?",
    answers: ["1. .p", "2. .header", "3. *", "4. :root"],
    correct: "4. :root",
  },
  {
    question: "What would you use to make a functional button in javascript?",
    answers: ["1. getElementById", "2. querySelectorAll", "3. addEventListener", "4. console.log"],
    correct: "3. addEventListener",
  },
  {
    question: "Arrays in javascript can be used to store _______?",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correct: "4. all of the above",
  }
];

// Set up the quiz
let currentQuestion = 0;
let score = 0;

function showQuestion() {  
  document.getElementById("question").textContent =
   quiz[currentQuestion].question;
  document.getElementById("answer0label").textContent =
   quiz[currentQuestion].answers[0];
  document.getElementById("answer1label").textContent =
   quiz[currentQuestion].answers[1];
  document.getElementById("answer2label").textContent =
   quiz[currentQuestion].answers[2];
  document.getElementById("answer3label").textContent =
   quiz[currentQuestion].answers[3];
}

function checkAnswer() {
  // Check the selected answer and display the result
  const selected = document.querySelector('input[name="answer"]:checked').value;
  if (selected == quiz[currentQuestion].correct) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    timeLeft -= 10;
    document.getElementById("result").textContent = "Incorrect!";
 
  }
}

function nextQuestion() {
  // Move on to the next question or end the quiz
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    showQuestion();
    document.getElementById("result").textContent = "";
  } else {
    document.getElementById("question").textContent = "You finished the quiz! Your score is " + score * 100/quiz.length + "%";
    document.getElementById("answer0").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("submit").style.display = "none";
    clearInterval(timerInterval);
    document.getElementById('restartBtn').style.display = 'flex';
    return;
  }
}

// Set up event listeners
document.getElementById("submit").addEventListener("click", checkAnswer);
document.getElementById("submit").addEventListener("click", nextQuestion);

// Create a new button element
const button = document.createElement("button");

// Set the text and attributes of the button
button.textContent = "Click me!";
button.setAttribute("type", "button");
button.setAttribute("id", "myButton");

choicesEl.addEventListener("click", function (e) {
  let value = e.target.innerText;
  let correctChoice = quiz[currentQuestion].correct;
  if (value === correctChoice) {
    console.log("Correct");
    addEventListener("click", checkAnswer);
    addEventListener("click", nextQuestion);
    score++;
  } else {
    console.log("Wrong");
    addEventListener("click", checkAnswer);
    addEventListener("click", nextQuestion);
  }
});

// Set the timer duration to 75 seconds
const timerDuration = 75;

// Get the timer element
const timerElement = document.getElementById("timer");

// Get the start button element
const startButton = document.getElementById("startBtn");

// Function to start the timer
function startTimer() {
  let secondsLeft = timerDuration;
  timerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft >= 0) {
      timerElement.textContent = `Timer: ${secondsLeft} seconds`;
    } else {
      timerElement.textContent = "Time's up!";
      return ;
    }
  }, 1000);
}

// Add event listener to start button
startButton.addEventListener("click", function () {
  startTimer();
  showQuestion();
  document.getElementById('ruleEl').style.display = 'none';
  document.getElementById('startBtn').style.display = 'none';
  var quizTitle = document.querySelector('.quiz-title');
  console.log(quizTitle, "quizTitle")
  quizTitle.style.display = 'flex';
  var options = document.querySelectorAll('.option');
  console.log(options, "options")
  document.getElementById('choices').style.display = 'flex';
});
// event listener to go back
const refreshButton = document.getElementById("restartBtn");
refreshButton.addEventListener("click", function () {
  location.reload();
});

//high score
var highScores = [];
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let playerScore = 0;

function updateScore(points) {
  playerScore += points;
}

function updateHighScore() {
  let highScore = localStorage.getItem('highScore');
  if (!highScore || playerScore > highScore) {
    localStorage.setItem('highScore', playerScore);
  }
}

let scoreElement = document.getElementById('score');
let highScoreElement = document.getElementById('high-score');

function displayScore() {
  scoreElement.textContent = `Score: ${playerScore}`;
  highScoreElement.textContent = `High Score: ${localStorage.getItem('highScore') || 0}`;
}
