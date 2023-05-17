// event listeners for buttons
document.getElementById("repeat").addEventListener("click", function () {
    window.location.href = "index.html";
});
document.getElementById("highscore").addEventListener("click", function () {
    window.location.href = "highscore.html";
});
document.getElementById("saveScoreBtn").addEventListener("click", function () {
    window.location.href = "highscore.html";
});

var username = document.getElementById("username");
var saveScoreButton = document.querySelector("#saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem('mostRecentScore');
var highScore = JSON.parse(localStorage.getItem('highScore')) || [];

finalScore.innerText = mostRecentScore + " Points!"

username.addEventListener("keyup", function () {
    saveScoreButton.disabled = !username.value;
});

function saveHighScore(event) {
    event.preventDefault();
    
    var scoreF = {
        scoreFProp: mostRecentScore,
        contestant: username.value,
    };
    highScore.push(scoreF);
    highScore.sort(function (a, b) {
        return b.scoreFProp - a.scoreFProp
    });
    highScore.splice(5, 1);

    localStorage.setItem('highScore', JSON.stringify(highScore));

    window.location.assign('highscore.html');
}