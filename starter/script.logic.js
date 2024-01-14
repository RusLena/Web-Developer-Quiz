// logic.js
// Add Variables with references to HTML elements
var startButton = document.getElementById("start");
var timer = document.getElementById("time");

// Creat timer 
var seconds = 60;

  timerInterval = setInterval(function () {
    seconds -= 1;
    timer.textContent = seconds;
  });
// Function to start the quiz
function startQuiz() {
  
}

// Function to handle user's answer
function handleAnswer(answer) {
}
// Function to end the quiz
function endQuiz() {
  // Display final score
  // User enters initials
  // Save high score to local storage
  // Redirect to high scores page
}
// Add event listeners for answer buttons

// Add event listener for the "Start Quiz" button
startButton.addEventListener("click", startQuiz);
