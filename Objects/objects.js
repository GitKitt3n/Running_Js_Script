//PLEASE DON'T TOUCH THIS LINE! set fullAddress variable to get full address
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:

const fullAddress = restaurant["address" + "city" + "state" + "zipcode"];

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

//Alternative Solution:

let fullAddress =
  restaurant["address"] +
  ", " +
  restaurant["city"] +
  ", " +
  restaurant["state"] +
  ", " +
  restaurant["zipcode"];
