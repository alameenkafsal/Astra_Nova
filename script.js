// ==========================================
// NAKSHATRA AI
// JUNIOR ASTRONAUT MISSION TRAINER
// TEAM ASTRANOVA - 2026
// ==========================================


// ==========================================
// START MISSION
// ==========================================

function startMission() {

    alert("🚀 Welcome, Junior Astronaut! Your space mission is starting!");

    document.getElementById("training").scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// PLANET INFORMATION
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

// Educational simulation values.
// These are game values, not real Mars mission data.

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

    document.getElementById("oxygen").textContent =
        marsResources.oxygen + "%";

    document.getElementById("shield").textContent =
        marsResources.shield + "%";

    document.getElementById("power").textContent =
        marsResources.power + "%";

    document.getElementById("food").textContent =
        marsResources.food + "%";

}


// RESOURCE MANAGEMENT

function manageResource(resource) {

    if (marsGameOver) {
        alert("Mission ended! Please restart the mission.");
        return;
    }

    let message = "";

    switch (resource) {

        case "oxygen":

            if (marsResources.power < 10) {
                alert("⚠️ Not enough power to restore oxygen!");
                return;
            }

            marsResources.power -= 10;

            marsResources.oxygen = Math.min(
                100,
                marsResources.oxygen + 25
            );

            message = "🫁 Oxygen system restored using 10% power!";

            break;


        case "shield":

            if (marsResources.power < 15) {
                alert("⚠️ Not enough power to improve radiation shielding!");
                return;
            }

            marsResources.power -= 15;

            marsResources.shield = Math.min(
                100,
                marsResources.shield + 25
            );

            message = "🛡️ Radiation protection improved!";

            break;


        case "power":

            marsResources.power = Math.min(
                100,
                marsResources.power + 30
            );

            message = "⚡ Solar panels generated 30% additional power!";

            break;


        case "food":

            if (marsResources.power < 15) {
                alert("⚠️ Not enough power for food production!");
                return;
            }

            marsResources.power -= 15;

            marsResources.food = Math.min(
                100,
                marsResources.food + 30
            );

            message = "🌱 Food production successful!";

            break;


        default:

            return;

    }


    // EVERY ACTION USES ONE SIMULATED DAY

    marsResources.oxygen = Math.max(
        0,
        marsResources.oxygen - 5
    );

    marsResources.shield = Math.max(
        0,
        marsResources.shield - 3
    );

    marsResources.power = Math.max(
        0,
        marsResources.power - 4
    );

    marsResources.food = Math.max(
        0,
        marsResources.food - 6
    );

    marsDay++;

    updateMarsDisplay();

    checkMarsSurvival(message);

}


// CHECK MISSION SURVIVAL

function checkMarsSurvival(message = "") {

    const status = document.getElementById("mission-status");

    const missionMessage = document.getElementById("mission-message");

    if (
        marsResources.oxygen <= 0 ||
        marsResources.shield <= 0 ||
        marsResources.power <= 0 ||
        marsResources.food <= 0
    ) {

        marsGameOver = true;

        status.textContent = "🔴 Mission Failed!";

        status.style.color = "#ff4444";

        missionMessage.textContent =
            "One or more critical resources have been exhausted. Your Mars outpost needs a restart.";

        alert("🚨 Mission Failed! Restart and try again.");

        return;

    }


    if (marsDay > 10) {

        marsGameOver = true;

        marsMissionWon = true;

        status.textContent = "🏆 Mission Successful!";

        status.style.color = "#00ff99";

        missionMessage.textContent =
            "Congratulations Commander! Your astronauts successfully survived 10 simulated Mars days!";

        alert("🏆 Congratulations! Mars Mission Successfully Completed!");

        return;

    }


    status.textContent = "🟢 Mission Active - Day " + marsDay;

    status.style.color = "#00ff99";

    missionMessage.textContent =
        message + " Your outpost survived. Keep managing your resources!";

}


// CHECK MISSION STATUS BUTTON

function checkMission() {

    const status = document.getElementById("mission-status");

    const missionMessage = document.getElementById("mission-message");

    if (marsGameOver) {

        missionMessage.textContent = marsMissionWon
            ? "🏆 Mission completed successfully!"
            : "Mission failed. Restart to try again.";

        return;

    }

    const resources = [
        marsResources.oxygen,
        marsResources.shield,
        marsResources.power,
        marsResources.food
    ];

    const minimum = Math.min(...resources);

    if (minimum < 25) {

        status.textContent = "⚠️ Warning! Critical Resources!";

        status.style.color = "#ffb347";

        missionMessage.textContent =
            "Some resources are running low. Take action immediately!";

    }

    else {

        status.textContent = "🟢 Mission Stable - Day " + marsDay;

        status.style.color = "#00ff99";

        missionMessage.textContent =
            "All systems are operating within safe game levels. Keep going!";

    }

}


// RESTART MARS MISSION

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

    document.getElementById("mission-status").textContent =
        "🟢 Mission Ready!";

    document.getElementById("mission-status").style.color =
        "#00ff99";

    document.getElementById("mission-message").textContent =
        "Welcome back Commander! Your Mars outpost is ready.";

}


// INITIALIZE MARS SIMULATOR

document.addEventListener("DOMContentLoaded", function () {

    updateMarsDisplay();

});


// ==========================================
// SPACE QUIZ - 7 QUESTIONS
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

    answerLocked = false;

    showQuestion();

}


// SHOW QUESTION

function showQuestion() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    if (currentQuestion >= questions.length) {

        finishQuiz();

        return;

    }

    answerLocked = false;

    timeLeft = 15;

    const q = questions[currentQuestion];

    let html = `

        <h3>🚀 Space Mission Quiz</h3>

        <p>Question ${currentQuestion + 1} of ${questions.length}</p>

        <p>🏆 Score: ${score}</p>

        <div class="quiz-progress">

            <div class="quiz-progress-fill"
                style="width:${(currentQuestion / questions.length) * 100}%">
            </div>

        </div>

        <h3 id="timer">⏱️ Time: 15s</h3>

        <h3 class="quiz-question">
            ${q.question}
        </h3>

        <div id="quiz-options">

    `;

    q.options.forEach((option, index) => {

        html += `

            <button
                class="quiz-option"
                onclick="checkAnswer(${index})"
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


// TIMER

function startTimer() {

    clearInterval(quizTimer);

    quizTimer = setInterval(function () {

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

            setTimeout(function () {

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

    const buttons = document.querySelectorAll(".quiz-option");

    if (selectedIndex === correctAnswer) {

        score += 10;

        feedback.textContent = "✅ Correct! +10 Points 🚀";

        if (buttons[selectedIndex]) {

            buttons[selectedIndex].classList.add("correct-option");

        }

    }

    else {

        feedback.textContent =
            "❌ Incorrect! Correct answer: " +
            questions[currentQuestion].options[correctAnswer];

        if (buttons[correctAnswer]) {

            buttons[correctAnswer].classList.add("correct-option");

        }

    }

    disableOptions();

    setTimeout(function () {

        currentQuestion++;

        showQuestion();

    }, 1300);

}


// DISABLE QUIZ OPTIONS

function disableOptions() {

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach(function (button) {

        button.disabled = true;

    });

}


// FINISH QUIZ

function finishQuiz() {

    clearInterval(quizTimer);

    const container = document.getElementById("quiz-container");

    let level = "";

    let badge = "";

    if (score >= 70) {

        level = "Space Commander";

        badge = "🏆";

    }

    else if (score >= 50) {

        level = "Senior Astronaut";

        badge = "🥇";

    }

    else if (score >= 30) {

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

        <h1 class="quiz-badge">${badge}</h1>

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

        if (!Array.isArray(scores)) scores = [];

    }

    catch (error) {

        scores = [];

    }

    scores.push(newScore);

    scores.sort(function (a, b) {

        return b - a;

    });

    scores = scores.slice(0, 5);

    localStorage.setItem(
        "nakshatraScores",
        JSON.stringify(scores)
    );

}


function showLeaderboard() {

    const container = document.getElementById("quiz-container");

    let scores = [];

    try {

        scores = JSON.parse(
            localStorage.getItem("nakshatraScores") || "[]"
        );

        if (!Array.isArray(scores)) scores = [];

    }

    catch (error) {

        scores = [];

    }

    let html = `

        <h2>🥇 Space Leaderboard</h2>

        <p>Top 5 Scores</p>

    `;

    if (scores.length === 0) {

        html += "<p>No scores yet. Play the quiz first!</p>";

    }

    scores.forEach(function (item, index) {

        html += `

            <div class="leaderboard-item">

                ${index + 1}. ${item} Points

            </div>

        `;

    });

    html += `

        <button onclick="startQuiz()">
            Play Again 🚀
        </button>

    `;

    container.innerHTML = html;

}


// ==========================================
// AI SPACE ASSISTANT
// ==========================================

function sendMessage() {

    const input = document.getElementById("user-input");

    const chatBox = document.getElementById("chat-box");

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

    let reply = "Ask me about planets, Mars, Moon, Sun or gravity!";


    if (message.includes("mars")) {

        reply = "Mars is called the Red Planet. It has two moons: Phobos and Deimos. A human Mars outpost would need oxygen, water, food and radiation protection!";

    }

    else if (message.includes("moon")) {

        reply = "The Moon is Earth's natural satellite. Humans first walked on the Moon in 1969.";

    }

    else if (message.includes("sun")) {

        reply = "The Sun is a star at the centre of our Solar System. It provides light and energy.";

    }

    else if (message.includes("earth")) {

        reply = "Earth is our home planet and the only planet currently known to support life.";

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

        reply = "Neptune is the farthest planet from the Sun and has extremely strong winds.";

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

        reply = "Gravity is the force that attracts objects towards each other and helps keep planets in orbit.";

    }

    else if (
        message.includes("oxygen") ||
        message.includes("life support")
    ) {

        reply = "Oxygen is essential for astronauts to breathe. A Mars habitat needs a reliable life-support system.";

    }

    else if (
        message.includes("radiation") ||
        message.includes("shield")
    ) {

        reply = "Radiation shielding helps protect astronauts from harmful space radiation.";

    }

    else if (
        message.includes("power") ||
        message.includes("energy")
    ) {

        reply = "Solar panels can generate electrical power for a Mars outpost.";

    }

    else if (
        message.includes("food") ||
        message.includes("plant")
    ) {

        reply = "Growing crops in controlled environments could help provide food for future Mars explorers.";

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


// SEND MESSAGE USING ENTER KEY

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("user-input");

    if (input) {

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                sendMessage();

            }

        });

    }

});
