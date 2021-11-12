//when to use an object in an array vs an array in an object?
if need specific information associate with product best to use Object

big list of things ARRAY 



//Ask Will to explain this
//if statement is true go into my block
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

//for(let i = 25; i<= 25;  i -= 5) {
  //console.log(i);
}//wrong

//for(let i = 25; i >= 0; i -= 5) {
  //console.log(i);
//}

//11.12.21 Trouble understanding the argument in loops why using index i in console
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for(let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}