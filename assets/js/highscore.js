const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const ul = document.querySelector("#highScoresList");

// Retrieve the submitted name and score from localStorage
const submittedName = localStorage.getItem("submittedName");
const submittedScore = localStorage.getItem("submittedScore");

// Display the submitted name and score
const finalScoreElement = document.getElementById("finalScore");
finalScoreElement.textContent = `Name: ${submittedName}, Score: ${submittedScore}`;
