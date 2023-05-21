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

// Set the timer duration to 75 seconds
const timerDuration = 75;

// Get the timer element
const timerElement = document.getElementById("timer");

// let timerInterval;
let secondsLeft;

// Function to start the timer
function startTimer() {
  secondsLeft = timerDuration;
  timerElement.textContent = `Timer: ${secondsLeft} seconds`;

  timerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft >= 0) {
      timerElement.textContent = `Timer: ${secondsLeft} seconds`;
    } else {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      endQuiz(); // Call the function to end the quiz
      return;
    }
  }, 1000);
}

// Function to check answers
function checkAnswer(e) {
  e.preventDefault();

  const selected = e.target.innerText;
  if (selected === quiz[currentQuestion].correct) {
    score++;
    document.getElementById("result").textContent = "";
  } else {
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0; // Ensure the timer doesn't go negative
    }
    document.getElementById("result").textContent = "";
    timerElement.textContent = `Timer: ${secondsLeft} seconds`;
  }

  nextQuestion();
}

// Remove the existing event listener
document.getElementById("submit").removeEventListener("click", checkAnswer);

// Add event listener to choicesEl
choicesEl.addEventListener("click", checkAnswer);

function endQuiz() {
  document.getElementById("question").textContent = "You finished the quiz! Your score is " + (score * 100) / quiz.length + "%";
  document.getElementById("answer0").style.display = "none";
  document.getElementById("answer1").style.display = "none";
  document.getElementById("answer2").style.display = "none";
  document.getElementById("answer3").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("result").textContent = "";  
  document.getElementById("submit-score").style.display = "flex";
}

function nextQuestion() {
  // Move on to the next question or end the quiz
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    showQuestion();
    document.getElementById("result").textContent = "";
  } else {
    clearInterval(timerInterval);
    document.getElementById("question").textContent =
      "You finished the quiz! Your score is " +
      ((score * 100) / quiz.length) +
      "%";

    showScoreForm();
    return;
  }
}

// Set up event listeners
document.getElementById("submit").addEventListener("click", checkAnswer);
// document.getElementById("submit").removeEventListener("click", nextQuestion);

// Create a new button element
const button = document.createElement("button");

// Set the text and attributes of the button
button.textContent = "Click me!";
button.setAttribute("type", "button");
button.setAttribute("id", "myButton");

choicesEl.addEventListener("click", function (e) {
  if (e.target.matches(".option")) {
    let value = e.target.innerText;
    let correctChoice = quiz[currentQuestion].correct;
    if (value === correctChoice) {
      console.log("Correct");
      checkAnswer();
      nextQuestion();
      score++;
    } else {
      console.log("Wrong");
      checkAnswer();
      nextQuestion();
    }
  }
});

// Get the start button element
const startButton = document.getElementById("startBtn");

function showScoreForm() {
  // Hide the quiz elements
  document.getElementById("question").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("submit").style.display = "none";

  // Show the score submission form
  document.getElementById("score-form").style.display = "block";

  // Display the final score
  const finalScore = (score / quiz.length) * 100;
  const resultElement = document.getElementById("supertitle");
  resultElement.textContent = `You finished the quiz! Your score is ${finalScore}% `;
  resultElement.classList.add("final-score"); // Add the CSS class "final-score"
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

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the submit button, initials input, and go back button elements
  const submitScoreBtn = document.getElementById("submit-score-btn");
  const initialsInput = document.getElementById("initials");
  const goBackBtn = document.getElementById("go-back");

  // Event listener for the submit button
  submitScoreBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      const initials = initialsInput.value.trim();

      if (initials !== "") {
          const submittedScore = Math.round((score / quiz.length) * 100);
          const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

          const newScore = {
              initials: initials,
              score: submittedScore,
          };

          highscores.push(newScore);
          localStorage.setItem("highscores", JSON.stringify(highscores));

          // Redirect to the highscore page
          window.location.assign("highscore.html");
      }
  });

  // // Event listener for the go back button
  goBackBtn.addEventListener("click", function () {
      // Redirect to the main page
      window.location.href = "index.html";
  });
});
