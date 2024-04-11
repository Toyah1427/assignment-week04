import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE messages (
    name TEXT,
    message TEXT
)
`);

db.prepare(`INSERT INTO messages (name, message) VALUES (?, ?)`).run(
    "Bob",
    "Hello world"
);

const insertStatement = db.prepare(
    `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("Bob", "Hello world");
insertStatement.run("Rick", "Hi Bob");
insertStatement.run("Squid", "I hate you both");

