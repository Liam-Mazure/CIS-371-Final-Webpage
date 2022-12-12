class User {
    constructor(description) {
        // if description is null or undefined, we want to create an "empty" User object.
        if (description) {
            this.id = description.id;
            this.fname = description.fname;
            this.lname = description.lname;
            this.usrName = description.usrName;
            this.passWrd = description.passWrd;
            this.email = description.email;
        }
    }

    static all() {
        return User.allUsers;
    }

    static find(id) {
        return User.allUsers.find((item) => item.id == id)
    }

    // Example of "deconstructing" an object
    static find2(theId) {
        return User.allUsers.find(({ id }) => theId === id);
    }
}

User.allUsers = [
    new User({ id: 1, fname: 'Joe', lname: 'Blow', usrName: 'jBlow', passWrd: 'wordpass1', email: 'joe@blow.com' }),
    new User({ id: 2, fname: 'John', lname: 'James', usrName: 'jj', passWrd: 'wordpass2', email: 'j@j.com' }),
    new User({ id: 3, fname: 'Tom', lname: 'Holland', usrName: 'Th', passWrd: 'wordpass3', email: 't@h.com' }),
    new User({ id: 4, fname: 'Jill', lname: 'Bill', usrName: 'jB', passWrd: 'wordpass4', email: 'j@b.com' }),
];

module.exports = User;