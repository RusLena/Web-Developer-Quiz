// logic.js
/// Getting references to HTML elements
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

// Function to handle the user's answer
function handleAnswer(answerIndex) {
  // Get the current question
  var currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the answer is correct
  if (answerIndex === currentQuestion.correctAnswer) {
    correctAnswers++;
  } else {
    // If incorrect, subtract time (10 seconds penalty)
    seconds -= 10;
    if (seconds < 0) {
      seconds = 0;
    }
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if all questions are answered
  if (currentQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    // Display the next question
    displayQuestion();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Hide the questions and show the end screen
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");

  // Display the final score
  scoreDisplay.textContent = correctAnswers;
}

// Event listener for the "Submit" button
submitButton.addEventListener("click", function () {
  // Get user's initials
  var initials = initialsInput.value.trim();

  // Check if initials are provided
  if (initials !== "") {
    // Create a score object
    var scoreObject = {
      initials: initials,
      score: correctAnswers,
    };

    // Add the score to the highScores array
    highScores.push(scoreObject);

    // Save highScores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect to the high scores page
    window.location.href = "highscores.html";
  }
});

// Event listener for the "Start Quiz" button
startButton.addEventListener("click", startQuiz);