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
        question: "Which planet has beautiful rings?",
        options: ["Mars", "Saturn", "Mercury", "Earth"],
        answer: "Saturn"
    },
    {
        question: "What is the natural satellite of Earth?",
        options: ["Sun", "Mars", "Moon", "Venus"],
        answer: "Moon"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById("quiz-container");

    if (currentQuestion >= questions.length) {
        container.innerHTML = `
            <h2>🎉 Quiz Completed!</h2>
            <h3>Your Score: ${score}/${questions.length}</h3>
            <p>${score >= 3 ? "Excellent! You are a Space Champion! 🚀" : "Good try! Keep learning! 🌟"}</p>
            <button onclick="startQuiz()">Play Again</button>
        `;
        return;
    }

    const q = questions[currentQuestion];

    container.innerHTML = `
        <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>
        <h3>${q.question}</h3>
        ${q.options.map(option => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join("")}
    `;
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
        score++;
        alert("Correct Answer! 🎉");
    } else {
        alert("Wrong Answer! Correct answer: " + correct);
    }

    currentQuestion++;
    showQuestion();
}
