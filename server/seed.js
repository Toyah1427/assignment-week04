import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS bgclasses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class TEXT,
    description TEXT,
    primary_ability TEXT
)
`);

//populate class table
const insertBGClasses = db.prepare(`
INSERT INTO bgclasses (class, description, primary_ability) VALUES (?, ?, ?)
`);

insertBGClasses.run(
    "Barbarian",
    "A fierce warrior of primitive background who can enter a battle rage",
    "Strength"
);
insertBGClasses.run(
    "Bard",
    "An inspiring magician whose power echoes the music of creation",
    "Charisma"
);
insertBGClasses.run(
    "Cleric",
    "A priestly champion who wields divine magic in service of a higher power",
    "Wisdom"
);
insertBGClasses.run(
    "Druid",
    "A priest of the Old Faith, wielding the powers of nature, moonlight and plant growth, fire, lightning and adopting animal forms",
    "Wisdom"
);
insertBGClasses.run(
    "Fighter",
    "A master of martial combat, skilled with a variety of weapons and armour",
    "Strength or Dexterity"
);
insertBGClasses.run(
    "Monk",
    "Channel your cosmic enlightenment by dodging and efficiently disassembling your foes through stunning strikes and a whirlwind of martial art attacks",
    "Dexterity and Wisdom"
);
insertBGClasses.run(
    "Paladin",
    "A holy warrior bound to a sacred oath",
    "Strength and Charisma"
);
insertBGClasses.run(
    "Ranger",
    "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
    "Dexterity and Wisdom"
);
insertBGClasses.run(
    "Rogue",
    "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
    "Dexterity"
);
insertBGClasses.run(
    "Sorcerer",
    "A spellcaster who draws on inherent magic from a gift or bloodline",
    "Charisma"
);
insertBGClasses.run(
    "Warlock",
    "A wielder of magic that is derived from a bargain with an extraplanar entity",
    "Charisma"
);
insertBGClasses.run(
    "Wizard",
    "A scholarly magic user capable of manipulating the structures of reality",
    "Intelligence"
);

db.exec(`
CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    comment TEXT
)
`);

const populateComments = db.prepare(`
INSERT INTO comments (username, comment) VALUES (?, ?)
`);

populateComments.run(
    "SuperPickle",
    "Sorcerer!! Because I've got the charisma!!"
);
populateComments.run(
    "Crumpet",
    "Barb and bard of course"
);
populateComments.run(
    "FuzzyWorm",
    "It's going to have to be a Rouge, fits my personality"
);