const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');



function addMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';

    console.log({ username: username, message: message });

    fetch("http://localhost:3000/message", {
        method: "POST",
        body: JSON.stringify({ username: username, message: message }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

form.addEventListener("submit", handleSubmit);
}