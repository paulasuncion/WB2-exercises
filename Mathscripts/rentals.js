// Declaring variables
let people = 38;
let van = people / 15;
let pricepervan = 250;

//Algorithm
let totalrent= van * pricepervan;
let costtosplit= totalrent / people;
//Need to round it up if has decimal (3.333)
van = Math.ceil(van);

//output
console.log("We would need " + van);
console.log("The total cost of the vans comes out to " + totalrent)
console.log("The split per person would be " + costtosplit)

