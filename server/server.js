import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, function () {
    console.log("App is running on port 3000");
});

app.get("/", function (request, response) {
    response.json("Youre looking at my root");
});

app.post("/message", function (request, response) {
    const newMessage = request.body;
    console.log(newMessage);
    response.json(newMessage);
});

