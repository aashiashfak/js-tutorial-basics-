// slice---possible negative numberst which count from left to right

const para = "Aryan is great";
var slice = para.slice(-6);
console.log("slice:", slice);

// substring took negative numbers are default as index 0 and count from start

var substring = para.substring(6);
console.log("substring:", substring);

// substr took first parameter as start and next as count
var substr = para.substr(-5,);
console.log("substr:",substr);


// length

let naame = 'Jhoan Doe'
console.log('length of the naame is:' ,naame.length)

//upper and lower case 

console.log('uppercase:', naame.toUpperCase());
console.log("Lowercase:", naame.toLowerCase());

// Trim 
let word = '   hello    '
console.log('word : ', word)
console.log('trim :', word.trim())


// pad 

let x = '5' 
console.log(x.padStart(3,'f'))
console.log(x.padEnd(3,'f'))


// charAt and at here at supports negative values which connect from right to left 

console.log(naame.charAt(7))
console.log(naame.at(-1))


// split

console.log(naame.split(' '))

// concat
let greet = 'Hello'  
console.log(greet.concat(' ', naame.split(' ')[0]))

