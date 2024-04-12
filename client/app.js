const form = document.getElementById("messageform");
const bgclasses = document.getElementById("bgclasses");

async function getBGClasses() {
    bgclasses.innerHTML = "";

    console.log("app.js BG3 Classes");
    const classesresponse = await fetch(
        "https://message-board-lp85.onrender.com/"
    );

}

function handleSubmit(event) {
event.preventDefault();
const username = event.target.username.value;
const message = event.target.message.value;

console.log({ username: username, message: message });


fetch("https://message-board-lp85.onrender.com/comments", {
    method: "POST",
    body: JSON.stringify({ username: username, message: message }),
    headers: {
    "Content-Type": "application/json",
    },
});
}

form.addEventListener("submit", handleSubmit);