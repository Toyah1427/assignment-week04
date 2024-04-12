const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');



function addMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';


    }
    }