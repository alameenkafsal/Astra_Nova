// START MISSION
function startMission() {
    alert("🚀 Welcome, Junior Astronaut! Your space mission is starting!");

    document.getElementById("training").scrollIntoView({
        behavior: "smooth"
    });
}


// PLANET INFORMATION
const planets = {

    Mercury: {
        name: "Mercury ☿",
        type: "Smallest Planet",
        temperature: "167°C average",
        fact: "Mercury is the closest planet to the Sun. It has a very thin atmosphere."
    },

    Venus: {
        name: "Venus ♀",
        type: "Hottest Planet",
        temperature: "464°C average",
        fact: "Venus is the hottest planet in our Solar System. It has thick clouds of carbon dioxide."
    },

    Earth: {
        name: "Earth 🌍",
        type: "Our Home Planet",
        temperature: "15°C average",
        fact: "Earth is the only planet currently known to support life. It has liquid water on its surface."
    },

    Mars: {
        name: "Mars 🔴",
        type: "The Red Planet",
        temperature: "-65°C average",
        fact: "Mars looks red because of iron oxide on its surface. Scientists are studying it for signs of ancient life."
    },

    Jupiter: {
        name: "Jupiter 🟠",
        type: "Largest Planet",
        temperature: "-110°C average",
        fact: "Jupiter is the largest planet. It has a giant storm called the Great Red Spot."
    },

    Saturn: {
        name: "Saturn 🪐",
        type: "Ringed Planet",
        temperature: "-140°C average",
        fact: "Saturn is famous for its beautiful rings made mostly of ice and rocky particles."
    },

    Uranus: {
        name: "Uranus 🔵",
        type: "Ice Giant",
        temperature: "-195°C average",
        fact: "Uranus rotates on its side and has a blue-green appearance because of methane in its atmosphere."
    },

    Neptune: {
        name: "Neptune 🔵",
        type: "Farthest Planet",
        temperature: "-200°C average",
        fact: "Neptune is the farthest planet from the Sun. It has extremely strong winds."
    }

};


// DISPLAY PLANET DETAILS
function showPlanetInfo(planetName) {

    const planet = planets[planetName];

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


// QUIZ QUESTIONS
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
        options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
        answer: 1
    }

];


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
            <h3>🎉 Quiz Completed!</h3>
            <p>Your Score: ${score} / ${questions.length}</p>
            <button onclick="startQuiz()">Play Again 🚀</button>
        `;

        return;
    }

    const q = questions[currentQuestion];

    let html = `
        <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
        <p>${q.question}</p>
    `;

    q.options.forEach((option, index) => {

        html += `
            <button onclick="checkAnswer(${index})">
                ${option}
            </button>
            <br><br>
        `;

    });

    container.innerHTML = html;
}


// CHECK ANSWER
function checkAnswer(selectedIndex) {

    if (selectedIndex === questions[currentQuestion].answer) {

        score++;
        alert("✅ Correct Answer!");

    } else {

        alert("❌ Wrong Answer! Try the next question.");

    }

    currentQuestion++;

    showQuestion();
}


// AI SPACE ASSISTANT
function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim().toLowerCase();

    if (message === "") {
        alert("Please enter a question!");
        return;
    }

    chatBox.innerHTML += `
        <p><strong>🧑‍🚀 You:</strong> ${input.value}</p>
    `;

    let reply = "I am your Space Assistant! Ask me about planets, Mars, Moon, Sun or gravity.";

    if (message.includes("mars")) {
        reply = "Mars is called the Red Planet. It has two small moons: Phobos and Deimos.";
    }

    else if (message.includes("moon")) {
        reply = "The Moon is Earth's natural satellite. It takes about 27.3 days to orbit Earth.";
    }

    else if (message.includes("sun")) {
        reply = "The Sun is a star at the centre of our Solar System.";
    }

    else if (message.includes("earth")) {
        reply = "Earth is our home planet and the only world currently known to support life.";
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
        reply = "Our Solar System has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.";
    }

    else if (message.includes("hello") || message.includes("hi")) {
        reply = "Hello Junior Astronaut! 🚀 Ready to explore space?";
    }

    chatBox.innerHTML += `
        <p><strong>🤖 Assistant:</strong> ${reply}</p>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
