// shallow copy

const array = [1, 2, [3, 4], 5];
const copiedarray = [...array];

copiedarray[2][0] = "3";

console.log(array, copiedarray);

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cityville",
    country: "Countryland",
  },
};

const copiedobj = {...person};
copiedobj.address.city = "Malappuram";
copiedobj.name = "Mathew";
console.log(person, copiedobj);




console.log(Object.entries(person))
console.log(Object.entries(array))

// deep copy

// const _ = require("lodash");

// const deepCopiedArr = _.cloneDeep(array);
// deepCopiedArr[2][1] = "4";
// console.log(array, deepCopiedArr);
