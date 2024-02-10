const User = {
    _email: "nepali@test.com",
    _password: "nepal",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const user1 = Object.create(User);
console.log(user1.email);
console.log(user1._password);

user1.email = "chini";
console.log(user1);
