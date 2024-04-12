const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const addButton = document.getElementById('add-button');


document.addEventListener('DOMContentLoaded', function() {



function addMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';


    }
    }
});
