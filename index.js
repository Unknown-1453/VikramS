// Handling user input and displaying bot responses
const sendButton = document.getElementById('send-button');
const userInputField = document.getElementById('user-input');
const messagesContainer = document.getElementById('messages');

// Handle user input and display bot reply
sendButton.addEventListener('click', handleUserInput);
userInputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

function handleUserInput() {
    const userInput = userInputField.value.trim();
    if (userInput) {
        displayUserMessage(userInput);
        processBotResponse(userInput);
        userInputField.value = '';
    }
}

function displayUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('user-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    scrollToBottom();
}

function displayBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    scrollToBottom();
    speakMessage(message);
}

function speakMessage(message) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(speech);
    }
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function processBotResponse(input) {
    let response = getResponse(input.toLowerCase());
    displayBotMessage(response);
}

function getResponse(input) {
    // let response = "Sorry, I didn't quite understand that. Could you please rephrase?";
    let response = "yes,vamshi";
    // Match input with predefined responses in constants.js
    for (const prompt of prompts) {
        if (prompt.keywords.some(keyword => input.includes(keyword))) {
            response = getReplyForCategory(prompt.category);
            break;
        }
    }
    return response;
}

function getReplyForCategory(category) {
    const categoryReplies = replies[category];
    return categoryReplies ? categoryReplies[Math.floor(Math.random() * categoryReplies.length)] : "Can you tell me more about what you're looking for?";
}
