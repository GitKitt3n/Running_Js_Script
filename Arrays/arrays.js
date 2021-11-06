//ARRAYS ALLOW US TO GROUP DATA TOGETHER
indexOf()//give position of element in array/first time is shows up
pop() //removes from end of array
push()//adds to end of array
concat()// combines 2 arrays
shift()//removes from beginning of array
unshift() //adds to beginning of array
include()//tells of if something is in an array
slice()//slices at starting and stopping point
splice() .splice(start, deleteCount...)//changes content of array by removing or replacing elements and/or adding a new one in its place
//SPLICE EXAMPLE

// DO NOT TOUCH!!! (please) update null to be  'Hugo'
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
// replaces 1 element at index 1
airplaneSeats[3].splice(1, 1, 'Hugo');



