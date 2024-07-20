const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber = 1123.8944

console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// ************Output **********
/*
400
[Number: 100]
3
100.0
1123.9
10,00,000
*/


// +++++++++++++++++++++++ Maths ********************
console.log(Math);
console.log(Math.abs(-4)); // Output 4
console.log(Math.floor (4.2)); // Output 4
console.log(Math.min(4,3,3,34,5,6)); // Output 3
console.log(Math.max(4,3,5,6,8)); // Output 8


