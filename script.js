// NAKSHATRA AI SPACE ASSISTANT

function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim().toLowerCase();

    if (question === "") {
        alert("Please ask a space question!");
        return;
    }

    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + input.value;
    chatBox.appendChild(userMessage);

    let answer = "";

    if (question.includes("mars")) {
        answer = "Mars is known as the Red Planet. It is our neighbouring planet! 🔴";
    }
    else if (question.includes("moon")) {
        answer = "The Moon is Earth's natural satellite. 🌕";
    }
    else if (question.includes("sun")) {
        answer = "The Sun is the closest star to Earth. ☀️";
    }
    else if (question.includes("earth")) {
        answer = "Earth is our home planet and supports life! 🌍";
    }
    else if (question.includes("jupiter")) {
        answer = "Jupiter is the largest planet in our Solar System! 🪐";
    }
    else if (question.includes("saturn")) {
        answer = "Saturn is famous for its beautiful rings! 🪐";
    }
    else if (question.includes("astronaut")) {
        answer = "Astronauts are trained people who travel and work in space! 👨‍🚀";
    }
    else if (question.includes("gravity")) {
        answer = "Gravity is the force that attracts objects towards each other!";
    }
    else if (question.includes("planet")) {
        answer = "There are 8 planets in our Solar System!";
    }
    else if (question.includes("hello") || question.includes("hi")) {
        answer = "Hello Junior Astronaut! Welcome to Nakshatra AI! 🚀";
    }
    else {
        answer = "Try asking me about Mars, Moon, Sun, Earth, planets, gravity or astronauts! 🌌";
    }

    const botMessage = document.createElement("p");
    botMessage.textContent = "🤖 Nakshatra AI: " + answer;
    chatBox.appendChild(botMessage);

    input.value = "";
}
