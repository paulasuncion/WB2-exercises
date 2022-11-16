let payrate = 60.50;
let hoursWorked = 45;
let overtime;
let totalDue;

if (overtime == true) {
    overtimeRate = payrate * 1.5;
}
else {
    overtime = 0;
}

totalDue = payrate * hoursWorked;

console.log("This employee earned " + totalDue)
