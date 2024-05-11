// const array1 = [1,2,3,4,5]
// const array2 = ['a','b']
// let destructorarr = [a,b,c,...d] = array1
// console.log(b,d)

// const combined = [...array1,...array2]
// console.log(combined)


// function sample(...args){
//     console.log(...args)
// }

// sample(array1,array2

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Destructuring assignment
const {firstName, lastName, age}=person;
console.log(firstName)


// practise 

function sum (...args){
    let x = 0
    for(i=0; i<args.length; i++){
        x += args[i]
    }
    return x
}

console.log(sum(1,2,3,4,5))

