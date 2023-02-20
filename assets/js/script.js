var choicesEl = document.getElementById("choices");

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
    document.getElementById("result").textContent = "Incorrect!";
    secondsLeft -= 10;
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
    document.getElementById("answer3").style.display = "none";
    document.getElementById("submit").style.display = "none";
    clearTimeout(timerElement);
    return;
  }
}

// Start the quiz
//showQuestion();

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
  setInterval(() => {
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
  //document.querySelector('.quiz-title').style.display = 'flex';
  //document.querySelectorAll('.option').style.display = 'flex';
  var options = document.querySelectorAll('.option');
  console.log(options, "options")
  //document.getElementById('choices').style.display = 'flex';
});
  
