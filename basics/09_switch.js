// comparing with string
month = "March";
switch (month) {
  case "January":
    month = "January";
    console.log("January");
    break;
  case "February":
    month = "February";
    console.log("February");
    break;
  case "March":
    month = "March";
    console.log("March");
    break;

  default:
    console.log("month is not  jan ,feb , march" + ` month is ${month}`);
    break;
}

// comparing switch case with case number
month = 2;
switch (month) {
  case 1:
    month = "January";
    console.log("January");
    break;
  case 2:
    month = "February";
    console.log("February");
    break;
  case 3:
    month = "March";
    console.log("March");
    break;

  default:
    console.log("month is not  jan ,feb , march" + ` month is ${month}`);
    break;
}
