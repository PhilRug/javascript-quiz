const quiz = [
  {
    question: "What is not a coding language?",
    answers: ["1. C+-", "2. CSS", "3. Javascript", "4. HTML"],
    correct: 0
  },
  {
    question: "How do you create a link?",
    answers: ["<p>", "<a href>", "<li>", "<h1>"],
    correct: 1
  },
  {
    question: "Where would you sort variables in CSS?",
    answers: [".p", ".header", "*", ":root"],
    correct: 3
  }
];

// Set up the quiz
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  
  document.getElementById("question").textContent = quiz[currentQuestion].question;
  document.getElementById("answer0label").textContent = quiz[currentQuestion].answers[0];
  document.getElementById("answer1label").textContent = quiz[currentQuestion].answers[1];
  document.getElementById("answer2label").textContent = quiz[currentQuestion].answers[2];
  document.getElementById("answer3label").textContent = quiz[currentQuestion].answers[3];
}

function checkAnswer() {
  // Check the selected answer and display the result
  const selected = document.querySelector('input[name="answer"]:checked').value;
  if (selected == quiz[currentQuestion].correct) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
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
    document.getElementById("question").textContent = "You finished the quiz! Your score is " + score + "/" + quiz.length;
    document.getElementById("answer0").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("submit").style.display = "none";
  }
}

// Start the quiz
showQuestion();

// Set up event listeners
document.getElementById("submit").addEventListener("click", checkAnswer);
document.getElementById("submit").addEventListener("click", nextQuestion);



var countDownDate;
var countdownTimer;

document.getElementById("countdown-btn").addEventListener("click", function() {
  countDownDate = new Date().getTime() + 75000;
  countdownTimer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 75)) / 1000);
    document.getElementById("countdown").innerHTML = "Time remaining: " + seconds + "s";
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Time's up!";
    }
  }, 1000);
});

// Create a new button element
const button = document.createElement("button");

// Set the text and attributes of the button
button.textContent = "Click me!";
button.setAttribute("type", "button");
button.setAttribute("id", "myButton");

// Add the button to an existing HTML element
const container = document.getElementById("option");
container.appendChild(button);