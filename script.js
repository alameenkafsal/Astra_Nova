// ==========================================
// NAKSHATRA AI - JUNIOR ASTRONAUT TRAINER
// COMPLETE JAVASCRIPT
// ==========================================


// ==========================================
// START MISSION
// ==========================================

function startMission() {

    alert("🚀 Welcome, Junior Astronaut! Your mission is starting!");

    document.getElementById("training").scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// PLANET INFORMATION - ALL 8 PLANETS
// ==========================================

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

    if (!details) return;

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


// ==========================================
// MARS MISSION SIMULATOR
// ==========================================

let marsResources = {
    oxygen: 100,
    shield: 100,
    power: 100,
    food: 100
};

let marsDay = 1;
let marsGameOver = false;
let marsMissionWon = false;


// UPDATE RESOURCE DISPLAY

function updateMarsDisplay() {

    const oxygen = document.getElementById("oxygen");
    const shield = document.getElementById("shield");
    const power = document.getElementById("power");
    const food = document.getElementById("food");

    const status = document.getElementById("mission-status");

    if (oxygen) oxygen.textContent = marsResources.oxygen + "%";
    if (shield) shield.textContent = marsResources.shield + "%";
    if (power) power.textContent = marsResources.power + "%";
    if (food) food.textContent = marsResources.food + "%";

    if (status) {
        status.textContent = "Day " + marsDay + " / 10";
    }

}


// RESET MISSION

function resetMission() {

    marsResources = {
        oxygen: 100,
        shield: 100,
        power: 100,
        food: 100
    };

    marsDay = 1;
    marsGameOver = false;
    marsMissionWon = false;

    updateMarsDisplay();

    const message = document.getElementById("mission-message");

    if (message) {
        message.innerHTML =
            "🚀 Your Mars mission is ready! Manage resources carefully and survive for 10 days.";
    }

}


// MANAGE RESOURCES

function manageResource(resource) {

    if (marsGameOver || marsMissionWon) {
        alert("Please reset the mission to play again!");
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(marsResources, resource)) {
        return;
    }

    let amount = 25;
    let powerCost = 0;

    if (resource === "oxygen") {
        powerCost = 10;
    }

    else if (resource === "shield") {
        powerCost = 15;
    }

    else if (resource === "food") {
        powerCost = 15;
    }

    else if (resource === "power") {
        amount = 30;
    }

    if (marsResources.power < powerCost) {

        alert("⚠️ Not enough power! Manage your energy carefully.");

        return;
    }

    marsResources.power -= powerCost;

    marsResources[resource] = Math.min(
        100,
        marsResources[resource] + amount
    );

    updateMarsDisplay();

    const message = document.getElementById("mission-message");

    if (message) {
        message.innerHTML =
            "✅ " + resource.toUpperCase() +
            " resources successfully managed!";
    }

}


// CHECK MISSION / ADVANCE DAY

function checkMission() {

    if (marsGameOver || marsMissionWon) {
        return;
    }

    // DAILY RESOURCE CONSUMPTION

    marsResources.oxygen -= 5;
    marsResources.shield -= 3;
    marsResources.power -= 4;
    marsResources.food -= 6;

    marsDay++;

    // CHECK RESOURCE FAILURE

    if (
        marsResources.oxygen <= 0 ||
        marsResources.shield <= 0 ||
        marsResources.power <= 0 ||
        marsResources.food <= 0
    ) {

        marsGameOver = true;

        updateMarsDisplay();

        const message = document.getElementById("mission-message");

        if (message) {
            message.innerHTML =
                "❌ MISSION FAILED! One or more resources ran out. Reset and try again!";
        }

        return;
    }

    // MISSION SUCCESS

    if (marsDay > 10) {

        marsMissionWon = true;

        marsDay = 10;

        updateMarsDisplay();

        const message = document.getElementById("mission-message");

        if (message) {
            message.innerHTML =
                "🏆 CONGRATULATIONS! Your Mars colony survived 10 days! Mission Successful!";
        }

        return;
    }

    updateMarsDisplay();

    const message = document.getElementById("mission-message");

    if (message) {
        message.innerHTML =
            "🌍 Day " + marsDay +
            " started! Monitor oxygen, radiation shielding, power and food.";
    }

}


// ==========================================
// SPACE QUIZ - EXACTLY 7 QUESTIONS
// ==========================================

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
    }

];


let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let quizTimer = null;
let answerLocked = false;


// START QUIZ

function startQuiz() {

    clearInterval(quizTimer);

    currentQuestion = 0;
    score = 0;

    showQuestion();

}


// SHOW QUESTION

function showQuestion() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    if (!container) return;

    if (currentQuestion >= questions.length) {

        finishQuiz();

        return;
    }

    answerLocked = false;
    timeLeft = 15;

    const q = questions[currentQuestion];

    let html = `

        <h3>🚀 Space Mission Quiz</h3>

        <p>Question ${currentQuestion + 1} of 7</p>

        <p>🏆 Score: ${score} / 70</p>

        <div class="quiz-progress">
            <div class="quiz-progress-bar"
                 style="width:${(currentQuestion / 7) * 100}%">
            </div>
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
                onclick="checkAnswer(${index})">
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


// QUIZ TIMER

function startTimer() {

    clearInterval(quizTimer);

    quizTimer = setInterval(() => {

        timeLeft--;

        const timer = document.getElementById("timer");

        if (timer) {
            timer.textContent = "⏱️ Time: " + timeLeft + "s";
        }

        if (timeLeft <= 0) {

            clearInterval(quizTimer);

            answerLocked = true;

            const feedback = document.getElementById("quiz-feedback");

            if (feedback) {
                feedback.textContent = "⏰ Time's Up!";
            }

            disableOptions();

            setTimeout(() => {

                currentQuestion++;

                showQuestion();

            }, 1200);

        }

    }, 1000);

}


// CHECK ANSWER

function checkAnswer(selectedIndex) {

    if (answerLocked) return;

    answerLocked = true;

    clearInterval(quizTimer);

    const correctAnswer = questions[currentQuestion].answer;

    const feedback = document.getElementById("quiz-feedback");

    if (selectedIndex === correctAnswer) {

        score += 10;

        feedback.textContent = "✅ Correct! +10 Points 🚀";

    }

    else {

        feedback.textContent =
            "❌ Incorrect! Correct answer: " +
            questions[currentQuestion].options[correctAnswer];

    }

    disableOptions();

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1300);

}


// DISABLE OPTIONS

function disableOptions() {

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach(button => {

        button.disabled = true;

        button.style.opacity = "0.6";

        button.style.cursor = "not-allowed";

    });

}


// FINISH QUIZ

function finishQuiz() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    if (!container) return;

    let level = "";
    let badge = "";

    if (score >= 60) {

        level = "Space Commander";
        badge = "🏆";

    }

    else if (score >= 40) {

        level = "Senior Astronaut";
        badge = "🥇";

    }

    else if (score >= 20) {

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

        <h2>🏆 ${score} / 70</h2>

        <p>You completed your Space Knowledge Mission!</p>

        <button onclick="startQuiz()">
            Play Again 🚀
        </button>

        <button onclick="showLeaderboard()">
            View Leaderboard 🥇
        </button>

    `;

}


// ==========================================
// LEADERBOARD
// ==========================================

function saveScore(newScore) {

    let scores = [];

    try {

        scores = JSON.parse(
            localStorage.getItem("nakshatraScores") || "[]"
        );

        if (!Array.isArray(scores)) {
            scores = [];
        }

    }

    catch (error) {

        scores = [];

    }

    scores.push(newScore);

    scores.sort((a, b) => b - a);

    scores = scores.slice(0, 5);

    localStorage.setItem(
        "nakshatraScores",
        JSON.stringify(scores)
    );

}


// SHOW LEADERBOARD

function showLeaderboard() {

    const container = document.getElementById("leaderboard");

    if (!container) return;

    let scores = [];

    try {

        scores = JSON.parse(
            localStorage.getItem("nakshatraScores") || "[]"
        );

        if (!Array.isArray(scores)) {
            scores = [];
        }

    }

    catch (error) {

        scores = [];

    }

    let html = `
        <h3>🥇 Space Leaderboard</h3>
        <p>Top 5 Scores</p>
    `;

    if (scores.length === 0) {

        html += "<p>No scores yet. Play the quiz first!</p>";

    }

    scores.forEach((item, index) => {

        html += `
            <p>
                ${index + 1}. 🚀 ${item} / 70 Points
            </p>
        `;

    });

    container.innerHTML = html;

}


// ==========================================
// AI SPACE ASSISTANT
// ==========================================

function sendMessage() {

    const input = document.getElementById("user-input");

    const chatBox = document.getElementById("chat-box");

    if (!input || !chatBox) return;

    const originalMessage = input.value.trim();

    const message = originalMessage.toLowerCase();

    if (message === "") {

        alert("Please enter a question!");

        return;

    }

    // USER MESSAGE

    const userMessage = document.createElement("p");

    const userLabel = document.createElement("strong");

    userLabel.textContent = "🧑‍🚀 You: ";

    userMessage.appendChild(userLabel);

    userMessage.appendChild(
        document.createTextNode(originalMessage)
    );

    chatBox.appendChild(userMessage);


    // ASSISTANT RESPONSE

    let reply = "Ask me about planets, Mars, Moon, Sun, astronauts or gravity! 🚀";


    if (message.includes("mars")) {

        reply = "Mars is called the Red Planet. It has two moons: Phobos and Deimos.";

    }

    else if (message.includes("moon")) {

        reply = "The Moon is Earth's natural satellite. It takes about 27.3 days to orbit Earth.";

    }

    else if (message.includes("sun")) {

        reply = "The Sun is a star at the centre of our Solar System.";

    }

    else if (message.includes("earth")) {

        reply = "Earth is our home planet and the only known planet with life.";

    }

    else if (message.includes("jupiter")) {

        reply = "Jupiter is the largest planet in our Solar System.";

    }

    else if (message.includes("saturn")) {

        reply = "Saturn is famous for its beautiful rings made mostly of ice and rock.";

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

        reply = "Gravity is the force of attraction between objects. It keeps planets in orbit.";

    }

    else if (message.includes("oxygen")) {

        reply = "Astronauts need oxygen to breathe. Space stations use life-support systems to provide it.";

    }

    else if (
        message.includes("shield") ||
        message.includes("radiation")
    ) {

        reply = "Radiation shielding protects astronauts from harmful space radiation.";

    }

    else if (message.includes("food")) {

        reply = "Astronauts need a continuous food supply. Future Mars missions may grow food using controlled environments.";

    }

    else if (
        message.includes("power") ||
        message.includes("energy")
    ) {

        reply = "Solar panels can generate electricity for a Mars habitat.";

    }

    else if (message.includes("planet")) {

        reply = "Our Solar System has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.";

    }

    else if (
        message.includes("hello") ||
        message.includes("hi")
    ) {

        reply = "Hello Junior Astronaut! 🚀 Ready to explore space?";

    }


    const assistantMessage = document.createElement("p");

    const assistantLabel = document.createElement("strong");

    assistantLabel.textContent = "🤖 Assistant: ";

    assistantMessage.appendChild(assistantLabel);

    assistantMessage.appendChild(
        document.createTextNode(reply)
    );

    chatBox.appendChild(assistantMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

}


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    resetMission();

    showLeaderboard();

});


// ==========================================
// END OF NAKSHATRA AI
// ==========================================
