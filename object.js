const person  = {
    'name': 'Jhoan',
    'age':24 ,
    'place': 'Malappuram',
    'greet': function() {
        console.log(`My name is ${person.name}. Iam from ${person.place}. Iam ${person.age} years old`)

    }
}

person.greet()

// to get keys of an obj 

console.log(Object.keys(person))


// to get values of an obj 

console.log(Object.values(person))

// to get both key and values as sub arrays in an array

console.log(Object.entries(person));

// to merge two  obj  

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const mergedObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObj); 


// own property fn return bool value 

const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('name')); 

// freeze obj then it will be immutable 

Object.freeze(obj)
obj.a = 2 
console.log(obj.a)



// Enhanced Object literals

const firstName = "Jhoan"
const LastName = "Doe"

const person2 = {
    firstName,
    LastName,
    ['fullName']:`${firstName} ${LastName}`,
    greet(){
        console.log(`Hello ${firstName} ${LastName}`);
    }

}

console.log(person2.firstName)
console.log(person2.LastName)
console.log(person2.fullName)
person2.greet()