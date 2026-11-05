// START MISSION FUNCTION
function startMission() {
    alert("🚀 Welcome, Junior Astronaut! Your space mission is starting!");
    document.getElementById("training").scrollIntoView({
        behavior: "smooth"
    });
}


// SPACE QUIZ QUESTIONS
const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },

    {
        question: "Which is the closest star to Earth?",
        options: ["Moon", "Sirius", "Sun", "Polaris"],
        answer: "Sun"
    },

    {
        question: "How many planets are in our Solar System?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },

    {
        question: "Which planet is famous for its rings?",
        options: ["Mars", "Saturn", "Mercury", "Earth"],
        answer: "Saturn"
    },

    {
        question: "What is the natural satellite of Earth?",
        options: ["Sun", "Mars", "Moon", "Venus"],
        answer: "Moon"
    },

    {
        question: "Which planet is the largest in our Solar System?",
        options: ["Earth", "Jupiter", "Neptune", "Mars"],
        answer: "Jupiter"
    },

    {
        question: "Who was the first human to walk on the Moon?",
        options: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Rakesh Sharma"
        ],
        answer: "Neil Armstrong"
    }
];


// QUIZ VARIABLES
let currentQuestion = 0;
let score = 0;


// START QUIZ
function startQuiz() {

    currentQuestion = 0;
    score = 0;

    showQuestion();
}


// DISPLAY QUESTION
function showQuestion() {

    const container = document.getElementById("quiz-container");

    if (currentQuestion >= questions.length) {

        container.innerHTML = `
            <h2>🎉 Quiz Completed!</h2>

            <h3>Your Score: ${score}/${questions.length}</h3>

            <p>
                ${score >= 5
                    ? "🏆 Excellent! You are a Space Champion!"
                    : "🌟 Good try! Keep learning and try again!"
                }
            </p>

            <button onclick="startQuiz()">
                Play Again 🔄
            </button>
        `;

        return;
    }

    const q = questions[currentQuestion];

    container.innerHTML = `
        <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>

        <h3>${q.question}</h3>

        <div id="answer-buttons">
            ${q.options.map((option, index) => `
                <button onclick="checkAnswer(${index})">
                    ${option}
                </button>
            `).join("")}
        </div>
    `;
}


// CHECK ANSWER
function checkAnswer(selectedIndex) {

    const correctAnswer = questions[currentQuestion].answer;

    const selectedAnswer = questions[currentQuestion].options[selectedIndex];

    if (selectedAnswer === correctAnswer) {

        score++;

        alert("🎉 Correct Answer! Well Done!");

    } else {

        alert("❌ Wrong Answer! Correct answer: " + correctAnswer);

    }

    currentQuestion++;

    showQuestion();
}
