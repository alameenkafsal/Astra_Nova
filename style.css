// ===================================
// NAKSHATRA AI - SPACE MISSION TRAINER
// ===================================


// START MISSION
function startMission() {
    alert("🚀 Welcome, Junior Astronaut! Your space mission is starting!");

    document.getElementById("training").scrollIntoView({
        behavior: "smooth"
    });
}


// ===================================
// PLANET INFORMATION
// ===================================

const planets = {

    Mercury: {
        name: "Mercury ☿",
        type: "Smallest Planet",
        temperature: "167°C average",
        fact: "Mercury is the closest planet to the Sun."
    },

    Venus: {
        name: "Venus ♀",
        type: "Hottest Planet",
        temperature: "464°C average",
        fact: "Venus is the hottest planet in our Solar System."
    },

    Earth: {
        name: "Earth 🌍",
        type: "Our Home Planet",
        temperature: "15°C average",
        fact: "Earth is the only planet currently known to support life."
    },

    Mars: {
        name: "Mars 🔴",
        type: "The Red Planet",
        temperature: "-65°C average",
        fact: "Mars looks red because of iron oxide on its surface."
    },

    Jupiter: {
        name: "Jupiter 🟠",
        type: "Largest Planet",
        temperature: "-110°C average",
        fact: "Jupiter has a giant storm called the Great Red Spot."
    },

    Saturn: {
        name: "Saturn 🪐",
        type: "Ringed Planet",
        temperature: "-140°C average",
        fact: "Saturn has beautiful rings made mostly of ice and rock."
    },

    Uranus: {
        name: "Uranus 🔵",
        type: "Ice Giant",
        temperature: "-195°C average",
        fact: "Uranus rotates on its side."
    },

    Neptune: {
        name: "Neptune 🔵",
        type: "Farthest Planet",
        temperature: "-200°C average",
        fact: "Neptune has extremely strong winds."
    }

};


// SHOW PLANET INFORMATION
function showPlanetInfo(planetName) {

    const planet = planets[planetName];

    if (!planet) return;

    const details = document.getElementById("planet-details");

    details.innerHTML = `
        <h3>${planet.name}</h3>
        <p><strong>Category:</strong> ${planet.type}</p>
        <p><strong>Temperature:</strong> ${planet.temperature}</p>
        <p><strong>Interesting Fact:</strong> ${planet.fact}</p>
    `;

    details.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ===================================
// SPACE QUIZ QUESTIONS
// ===================================

const questions = [

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: 1
    },

    {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "Sun", "Polaris", "Vega"],
        answer: 1
    },

    {
        question: "How many planets are in our Solar System?",
        options: ["7", "8", "9", "10"],
        answer: 1
    },

    {
        question: "Which planet has beautiful rings?",
        options: ["Mars", "Earth", "Saturn", "Mercury"],
        answer: 2
    },

    {
        question: "What is Earth's natural satellite?",
        options: ["Sun", "Moon", "Mars", "Venus"],
        answer: 1
    },

    {
        question: "Which is the largest planet?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: 2
    },

    {
        question: "Who was the first human to walk on the Moon?",
        options: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "John Glenn"
        ],
        answer: 1
    },

    {
        question: "Which planet is farthest from the Sun?",
        options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
        answer: 2
    },

    {
        question: "Which planet is the hottest?",
        options: ["Mercury", "Venus", "Mars", "Earth"],
        answer: 1
    },

    {
        question: "What force keeps planets in orbit?",
        options: ["Friction", "Gravity", "Magnetism", "Electricity"],
        answer: 1
    }

];


let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let quizTimer = null;


// ===================================
// START QUIZ
// ===================================

function startQuiz() {

    clearInterval(quizTimer);

    currentQuestion = 0;
    score = 0;

    showQuestion();
}


// ===================================
// SHOW QUESTION
// ===================================

function showQuestion() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    if (currentQuestion >= questions.length) {
        finishQuiz();
        return;
    }

    timeLeft = 15;

    const q = questions[currentQuestion];

    let html = `
        <h3>🚀 Space Mission Quiz</h3>

        <p>Question ${currentQuestion + 1} of ${questions.length}</p>

        <p>🏆 Score: ${score}</p>

        <div style="
            width:100%;
            background:#333;
            height:10px;
            border-radius:20px;
            margin:15px 0;
        ">
            <div id="progress-bar" style="
                width:${(currentQuestion / questions.length) * 100}%;
                height:10px;
                background:linear-gradient(90deg,#6500ff,#00c8ff);
                border-radius:20px;
            "></div>
        </div>

        <h3 id="timer">⏱️ Time: 15s</h3>

        <h3 style="margin:20px 0;">
            ${q.question}
        </h3>

        <div id="quiz-options">
    `;

    q.options.forEach((option, index) => {

        html += `
            <button
                class="quiz-option"
                onclick="checkAnswer(${index})"
                style="
                    display:block;
                    width:100%;
                    margin:10px 0;
                "
            >
                ${option}
            </button>
        `;

    });

    html += `
        </div>

        <p id="quiz-feedback"></p>
    `;

    container.innerHTML = html;

    startTimer();
}


// ===================================
// TIMER
// ===================================

function startTimer() {

    clearInterval(quizTimer);

    quizTimer = setInterval(() => {

        timeLeft--;

        const timer = document.getElementById("timer");

        if (timer) {
            timer.innerHTML = `⏱️ Time: ${timeLeft}s`;
        }

        if (timeLeft <= 0) {

            clearInterval(quizTimer);

            const feedback = document.getElementById("quiz-feedback");

            if (feedback) {
                feedback.innerHTML = "⏰ Time's Up!";
            }

            disableOptions();

            setTimeout(() => {
                currentQuestion++;
                showQuestion();
            }, 1200);

        }

    }, 1000);
}


// ===================================
// CHECK ANSWER
// ===================================

function checkAnswer(selectedIndex) {

    clearInterval(quizTimer);

    const correctAnswer = questions[currentQuestion].answer;

    const feedback = document.getElementById("quiz-feedback");

    if (selectedIndex === correctAnswer) {

        score += 10;

        feedback.innerHTML = "✅ Correct! +10 Points 🚀";

    } else {

        feedback.innerHTML =
            "❌ Incorrect! Correct answer: " +
            questions[currentQuestion].options[correctAnswer];

    }

    disableOptions();

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1300);
}


// DISABLE ANSWER BUTTONS
function disableOptions() {

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
    });

}


// ===================================
// FINISH QUIZ
// ===================================

function finishQuiz() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    let level = "";
    let badge = "";

    if (score >= 90) {
        level = "Space Commander";
        badge = "🏆";
    }

    else if (score >= 70) {
        level = "Senior Astronaut";
        badge = "🥇";
    }

    else if (score >= 40) {
        level = "Junior Astronaut";
        badge = "🥈";
    }

    else {
        level = "Space Trainee";
        badge = "⭐";
    }

    saveScore(score);

    container.innerHTML = `
        <h2>🎉 Mission Completed!</h2>

        <h1 style="font-size:45px;">${badge}</h1>

        <h3>${level}</h3>

        <h2>🏆 ${score} / 100</h2>

        <p>You completed your Space Knowledge Mission!</p>

        <button onclick="startQuiz()">
            Play Again 🚀
        </button>

        <button onclick="showLeaderboard()">
            View Leaderboard 🥇
        </button>
    `;
}


// ===================================
// LEADERBOARD
// ===================================

function saveScore(newScore) {

    let scores = JSON.parse(
        localStorage.getItem("nakshatraScores") || "[]"
    );

    scores.push(newScore);

    scores.sort((a, b) => b - a);

    scores = scores.slice(0, 5);

    localStorage.setItem(
        "nakshatraScores",
        JSON.stringify(scores)
    );

}


function showLeaderboard() {

    const container = document.getElementById("quiz-container");

    const scores = JSON.parse(
        localStorage.getItem("nakshatraScores") || "[]"
    );

    let html = `
        <h2>🥇 Space Leaderboard</h2>
        <p>Top 5 Scores</p>
    `;

    if (scores.length === 0) {
        html += "<p>No scores yet. Play the quiz first!</p>";
    }

    scores.forEach((item, index) => {

        html += `
            <p style="margin:12px;">
                ${index + 1}. ${item} Points
            </p>
        `;

    });

    html += `
        <button onclick="startQuiz()">Play Again 🚀</button>
    `;

    container.innerHTML = html;

}


// ===================================
// AI SPACE ASSISTANT
// ===================================

function sendMessage() {

    const input = document.getElementById("user-input");

    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim().toLowerCase();

    if (message === "") {
        alert("Please enter a question!");
        return;
    }

    const userMessage = document.createElement("p");

    userMessage.innerHTML = "<strong>🧑‍🚀 You:</strong> ";

    userMessage.textContent += input.value;

    chatBox.appendChild(userMessage);

    let reply = "Ask me about planets, Mars, Moon, Sun or gravity!";

    if (message.includes("mars")) {
        reply = "Mars is called the Red Planet. It has two moons: Phobos and Deimos.";
    }

    else if (message.includes("moon")) {
        reply = "The Moon is Earth's natural satellite.";
    }

    else if (message.includes("sun")) {
        reply = "The Sun is a star at the centre of our Solar System.";
    }

    else if (message.includes("earth")) {
        reply = "Earth is our home planet and supports life.";
    }

    else if (message.includes("jupiter")) {
        reply = "Jupiter is the largest planet in our Solar System.";
    }

    else if (message.includes("saturn")) {
        reply = "Saturn is famous for its beautiful rings.";
    }

    else if (message.includes("uranus")) {
        reply = "Uranus is an ice giant that rotates on its side.";
    }

    else if (message.includes("neptune")) {
        reply = "Neptune is the farthest planet from the Sun.";
    }

    else if (message.includes("mercury")) {
        reply = "Mercury is the smallest planet and closest to the Sun.";
    }

    else if (message.includes("venus")) {
        reply = "Venus is the hottest planet in our Solar System.";
    }

    else if (message.includes("astronaut")) {
        reply = "Astronauts are trained people who travel and work in space.";
    }

    else if (message.includes("gravity")) {
        reply = "Gravity is the force that attracts objects towards each other.";
    }

    else if (message.includes("planet")) {
        reply = "Our Solar System has eight planets!";
    }

    else if (
        message.includes("hello") ||
        message.includes("hi")
    ) {
        reply = "Hello Junior Astronaut! 🚀 Ready to explore space?";
    }

    const assistantMessage = document.createElement("p");

    assistantMessage.innerHTML = "<strong>🤖 Assistant:</strong> ";

    assistantMessage.textContent += reply;

    chatBox.appendChild(assistantMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
