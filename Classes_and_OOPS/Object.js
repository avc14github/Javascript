function multplyBy5(num) {
  return num * 5;
}

multplyBy5.power = 2;

console.log(multplyBy5(5));

console.log(multplyBy5.power);
console.log(multplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

console.log(createUser.length);

createUser.prototype.increment = function () {
  this.score++;
};

const nepal = new createUser("nepali", 50);
const china = new createUser("chini", 20);

console.log(nepal);
console.log(china);
