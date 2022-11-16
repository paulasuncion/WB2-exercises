let greeting;
let hour = 18;

if (hour <= 10) {
    greeting = "Good morning!";
}
else if (hour <= 17) {
    greeting = "Good afternoon!";
}
else {
    greeting = "Good evening!";
}

console.log(greeting + "How are you doing?")