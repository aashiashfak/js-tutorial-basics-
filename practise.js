
// ternary operators

const num = 10;
const result = num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
console.log(result); // Output: 'Positive'


const age = 18 ;

function checkAge(age){
    return age < 18 ? "you are under age " : "you are an adult";
}

console.log(checkAge(age))


// Import module


const math = require("./module");

console.log(math.add(10,20))

console.log(math.substract(10,20))