// logic.js
// Add Variables with references to HTML elements
var startButton = document.getElementById("start");
var timerSpan = document.getElementById("time");
var scoreDisplay = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var highScoresList = document.getElementById("highscores");

// Initializing variables
var seconds = 60;
var timerInterval;
var currentQuestionIndex = 0;
var correctAnswers = 0;
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Function to start the quiz
function startQuiz() {
  // Clear any existing intervals
  clearInterval(timerInterval);

  // Set up a new timer interval
  timerInterval = setInterval(function () {
    seconds -= 1;
    timerSpan.textContent = seconds;

    // Check if time is up or all questions are answered
    if (seconds <= 0 || currentQuestionIndex === quizQuestions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);

  // Display the first question
  displayQuestion();
}
// Function to display a question
function displayQuestion() {
  // Get the current question
  var currentQuestion = quizQuestions[currentQuestionIndex];

  // Update the question title
  document.getElementById("question-title").textContent = currentQuestion.question;

  // Clear previous choices
  var choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  // Create buttons for each choice and add event listeners
  currentQuestion.choices.forEach(function (choice, index) {
    var button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", function () {
      // Handle the user's answer when a choice is clicked
      handleAnswer(index);
    });

    choicesContainer.appendChild(button);
  });

  // Hide the start screen and show the questions
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
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
