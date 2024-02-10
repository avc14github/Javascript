class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }

  // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
  
  static createID() {
    return `123`;
  }
}

const John = new User("John");
// console.log(John.createID())

class Admin extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const David = new Admin("David", "David@admin.com");

David.logMe();
// console.log(David.createID());
