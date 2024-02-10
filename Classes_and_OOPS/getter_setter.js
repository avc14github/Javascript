class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    return this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }

  get userdetails() {
    console.log(`${this.email} and ${this.password}`);
  }
}

const user1 = new User("nepali@test.com", "nepali123");
console.log(user1.password);
console.log(user1.email)

user1.userdetails;
