//**********scope ******************************/

one(); // normal fn can be executed before declaration

function one() {
  var name = "jake"; // not block scoped
  let age = 19; // blocked scope
  const gender = "male"; // blocked scope

  function two() {
    // console.log(name);

    name = "jaykishan";

    // console.log(name);

    let age = 87;

    console.log(age);
    const gender = "M";
    // console.log(gender);
  }

  two(); // need to call childer fn inside parent fn
}

//scope of vairable as function - fn expressions

// newest();   //cannot execute before declaration
const newest = function () {
  console.log("hello new one");
};

newest();
