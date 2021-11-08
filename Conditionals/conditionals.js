let random = Math.random();

if (1 + 1 === 2) {
  console.log("YOU WIN!");
}

if (random > 10) {
  console.log("TRY AGAIN");
  console.log(random);
}

// ELSE IFs

const dayOfWeek = "Friday";

if (dayOfWeek === "Friday") {
  console.log("Freedom!!!!!");
} else if (dayOfWeek === "Monday") {
  console.log("MANIC MONDAY!");
} else if (dayOfWeek === "Tuesday") {
  console.log("Turbulent Tuesdays");
} else {
  console.log("Work sucks, I know...");
}

//Password must be 6 or more characters
//Password cannot include space
//Demonstrating nesting
const password = prompt("please create a new password");

if (password.length >= 6) {
  console.log("Great password!");
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Cannot have spaces!!!");
  }
} else {
  console.log("Password is too short");
}

//Ask Will to explain this

const num = 102;

if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}
//CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
const mystery = "Parodpp7";

if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}

const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
