// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  updateUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("nepali", "nepali@gmail.com", "nepal123");

console.log(user1.encryptPassword());
console.log(user1.updateUsername());

// behind the scene

function Users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Users.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

Users.prototype.updateUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const User2 = new Users("chini", "china@chini.com", "china123");

console.log(User2.encryptPassword());
console.log(User2.updateUsername());
