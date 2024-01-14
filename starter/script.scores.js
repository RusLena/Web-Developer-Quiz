// Variables with reference to HTML file
var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

// Retrieve high scores from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Display high scores
function displayHighScores() {
  // Sort high scores by score in descending order
  highScores.sort((a, b) => b.score - a.score);

  // Display each high score in the list
  highScores.forEach(function (score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highScoresList.appendChild(listItem);
  });
}

// Clear high scores
clearButton.addEventListener("click", function () {
  // Clear high scores from local storage
  localStorage.removeItem("highScores");

  // Clear the displayed high scores
  highScoresList.innerHTML = "";
});

// Display high scores when the page loads
displayHighScores();