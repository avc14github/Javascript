const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls , cryptograpy , network
  setTimeout(function () {
    console.log("Asyn task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed ");
});

// promise two

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved ");
});

// promise three

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "rajesh", email: "rajesh@test.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// promise four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "jay", password: "123" });
    } else {
      reject("Error : something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("promise is done either resolved or rejected");
  });

//   promise five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Async jay", password: "123" });
    } else {
      reject("Error : Javascript went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// getAllUser

async function getAllUsers() {
  try {
    const respose = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await respose.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("no problem "));
