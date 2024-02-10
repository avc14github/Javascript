// call , bind , this

function SetUsername(username) {
    // complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    // SetUsername(username);
    // SetUsername.call(username);
    SetUsername.call(this , username);

    this.email = email;
    this.password = password;
}

const user1 = new createUser("nepali", "nepali@nepal.com", "nepal123@");
console.log(user1);