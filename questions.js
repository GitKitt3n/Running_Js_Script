//when to use an object in an array vs an array in an object?

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

//difference between + and +=
//how to not crash the browser when making for loops

for(let i = 25; i<= 25; -= 5) {
  console.log(i);
}
