// const socket = io("http://localhost:5000");

// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// // 🎤 Speech Recognition
// const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();

// btn.addEventListener("click", () => {
//     recognition.start();
// });

// recognition.onresult = (event) => {
//     const text = event.results[0][0].transcript;
//     output.innerText = "You: " + text;

//     socket.emit("chat message", text);
// };

// // 🔊 Text to Speech
// function speak(text) {
//     const synth = window.speechSynthesis;
//     const utter = new SpeechSynthesisUtterance(text);
//     synth.speak(utter);
// }

// socket.on("bot reply", (msg) => {
//     output.innerText += "\nBot: " + msg;
//     speak(msg);
// });

const socket = io("http://localhost:5000");

const chat = document.getElementById("chat");
const input = document.getElementById("input");

function addMessage(sender, text) {
    const div = document.createElement("div");

    div.className = sender === "You" ? "user" : "bot";

    // 🔥 Convert markdown → HTML
    div.innerHTML = `<strong>${sender}:</strong><br>${marked.parse(text)}`;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}
function sendMessage() {        
    const text = input.value;
    if (!text) return;

    addMessage("You", text);
    socket.emit("chat message", text);
    input.value = "";
}

socket.on("bot reply", (msg) => {
    addMessage("Bot", msg);
});