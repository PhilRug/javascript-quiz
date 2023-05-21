document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the high scores from localStorage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
    // Get the high scores list element
    const highScoresList = document.getElementById("high-scores-list");
  
    // Clear the existing content of the high scores list
    highScoresList.innerHTML = "";
  
    // Loop through the high scores and create list items to display them
    for (let i = 0; i < highscores.length; i++) {
      const score = highscores[i];
      const listItem = document.createElement("li");
      listItem.textContent = `${score.initials} - ${score.score}%`;
      highScoresList.appendChild(listItem);
    }
  
    // Retrieve the clear scores button element
    const clearScoresBtn = document.getElementById("clear-scores");
  
    // Add event listener to the clear scores button
    clearScoresBtn.addEventListener("click", function () {
      // Clear the high scores from localStorage
      localStorage.removeItem("highscores");
  
      // Clear the displayed high scores list
      highScoresList.innerHTML = "";
    });
  });
  
  