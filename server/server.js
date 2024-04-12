import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const db = new Database("database.db");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, function () {
    console.log("App is running on port 3000");
});

app.get("/", function (request, response) {
    response.json("Youre looking at my root");
});

app.get("/bgclasses", function (request, response) {
    console.log("Showing BG3 classes");
    const bgClasses = db.prepare("SELECT * FROM classes").all();
    response.json(bgClasses);
});


app.get("/comments", function (request, response) {
    console.log(request.query);
    console.log("Loading user comments...");
    const comments = db
    .prepare(`SELECT * FROM comments WHERE name = ${request.query.id}`)
    .all();
    console.log(comments);
    response.json(comments);
});


app.post("/comments", function (request, response) {
    console.log(request.body);
    response.json(request.body);
    
    const addtNewComment = db.prepare(`
    INSERT INTO comments (name, comment) VALUES (?, ?)
    `);

    addNewComment.run(
        request.body.name,
        request.body.comment
    );
    if (err) {
        console.error(err.message);
        response.status(500).send("Error with adding comment");
    } else {
        response.send("Yippee");
    }
});

