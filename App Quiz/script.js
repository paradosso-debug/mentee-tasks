const quizData = [
  {
    question: "Which mythical creature is known to breathe fire?",
    answers: ["Unicorn", "Phoenix", "Dragon", "Mermaid"],
    correctAnswer: "Dragon",
  },
  {
    question: "Which creature is said to turn people to stone with its gaze?",
    answers: ["Medusa", "Minotaur", "Kraken", "Basilisk"],
    correctAnswer: "Medusa",
  },
  {
    question:
      "What is the name of the giant one-eyed creature in Greek mythology?",
    answers: ["Cyclops", "Chimera", "Griffin", "Kraken"],
    correctAnswer: "Cyclops",
  },
  {
    question: "Which creature is part lion, part eagle?",
    answers: ["Chimera", "Pegasus", "Harpy", "Thunderbird"],
    correctAnswer: "Pegasus",
  },
  {
    question: "Which legendary bird is known to be reborn from its ashes?",
    answers: ["Phoenix", "Pegasus", "Harpy", "Thunderbird"],
    correctAnswer: "Phoenix",
  },
];

// Get HTML Elements
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

// Build the Quiz
function buildQuiz() {
  const output = [];

  quizData.forEach((data, index) => {
    const answers = [];

    for (let i = 0; i < data.answers.length; i++) {
      answers.push(
        `<label>
          <input
            type="radio"
            name="question${index}"
            value="${data.answers[i]}"
          >
            ${data.answers[i]}
          </input>
        </label>`
      );
    }

    output.push(
      `<div class="question">
        <h2>Question ${index + 1}</h2>
        <p>${data.question}</p>
        <ul>${answers.join("")}</ul>
      </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

// Check Answers
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".question");
  let score = 0;

  quizData.forEach((data, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === data.correctAnswer) {
      score++;
      answerContainers[index].style.color = "lightgreen";
    } else {
      answerContainers[index].style.color = "red";
    }
  });

  resultsContainer.innerHTML = ` Your Score: ${score}/${quizData.length}`;
}

// Load Quiz on Page Start
document.onload = buildQuiz();

// Event Listeners for Buttons
submitButton.addEventListener("click", showResults);
resetButton.addEventListener("click", () => {
  resultsContainer.innerHTML = "";
  buildQuiz();
});
