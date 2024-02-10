function User(email, password) {
  this._email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (value) {
      this._email = value;
    },
  });
}

const newUser = new User("usos@wwe.com", "Jimjay");

console.log(newUser.email);
