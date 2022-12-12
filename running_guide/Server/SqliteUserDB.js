var sqlite3 = require('sqlite3').verbose();
let Toy = require('./Toy');

class SqliteUserDB {

    static initialize() {
        this.db.serialize(() => {
            this.db.run('CREATE TABLE Users (id INTEGER PRIMARY KEY, fname TEXT NOT NULL, lname TEXT NOT NULL, usrName TEXT NOT NULL, passWrd TEXT NOT NULL, email TEXT NOT NULL);');
            this.db.run('INSERT INTO Users (fname, lname, usrName, passWrd, email) VALUES ("Liam", "Mazure", "lMaz", "wordpass", "lmaz@gmail.com");');
            this.db.run('INSERT INTO Users (fname, lname, usrName, passWrd, email) VALUES ("Grace", "Obrien", "OB", "wordpass2", "ob@gmail.com");');
        });
    }

    static allUsers() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * from Users', (err, response) => {
                resolve(response.map((item) => new User(item)));
            });
        });
    }

    // Notice that there is *a lot* of error handling missing here.
    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Users where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new User(rows[0]));
                } else {
                    reject(`Id ${id} not found`);
                }
            });
        });
    }

    static create(description) {
        let newUser = new User(description);
        if (newUser.isValid()) {
            return new Promise((resolve, reject) => {
                // Note:  In order to have access to this.lastID, you have to use function instead of the new arrow syntax.
                // See https://github.com/TryGhost/node-sqlite3/wiki/API
                this.db.run(`INSERT INTO Users (fname, lname, usrName, passWrd, email) VALUES ("${newUser.fname}", "${newUser.lname}", "${newUser.usrName}", "${newToy.passWrd}", "${newToy.email}")`,
                    function(err, data) {
                        newUser.id = this.lastID;
                        resolve(newUser);
                    });
            });
        } else {
            return newUser;
        }
    }

    static update(user) {
        this.db.run(`UPDATE Users SET fname="${user.fname}", lname="${user.lname}", usrName="${user.usrName}", passWrd="${user.passWrd}", email="${user.email}" where id="${user.id}"`);
    }
}


SqliteUserDB.db = new sqlite3.Database('users.sqlite');

module.exports = SqliteUserDB;