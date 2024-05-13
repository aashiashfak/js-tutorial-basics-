
// array deletion 
const car  = ['Benz', 'BMW', 'Volvo']
delete car[0]
console.log(car)

console.log(car[0])


// array concating 
const bike = ['HeroHonda', 'Bajaj'];
const vehicle = car.concat(bike);
console.log(vehicle)

//copy within 

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2,0,3))

// splice for update delete add 

car.splice(0,1,'Benz')
console.log(car)

// slice 

console.log(fruits.slice(0,3))

// map
const names = ['Jhoan Doe' , 'Arun Baby' , 'Mithun Joseph']
const firstnames = names.map(name => name.split(' ')[0])
console.log('array with firstnames:' ,firstnames)

const numbers = [1,2,3,4,5]
const doubles = numbers.map(num => num *2)
console.log(doubles)

// filter

console.log('even numbers:',numbers.filter(num=> num %2 == 0))

// reduce 

console.log('addition of total array:',numbers.reduce((pre ,cur) => pre + cur, 0 ))



// foreach 
numbers.forEach(num => {
    console.log(num)
})

//find 

console.log('first even number in array:', numbers.find(num=> num % 2 == 0))


// sort 

const numbers2 = [67,87,54,76,23];
console.log(numbers2.sort((a,b)=>a-b))


// push 

const animals = ['Cat', 'Mouse', 'Dog', 'Duck']
animals.push('Hen', 'Rabbit')

console.log(animals)

// pop

animals.pop()
console.log(animals)

// shif 

animals.shift()
console.log(animals);

// unshift 

animals.unshift('Cat','Rabbit')
console.log(animals);

// slice 
console.log(animals.slice(3,6)); // first parameter indicates the index and parameter indicates position

// splice 

animals.splice(1,0,'Crow'); // no deletion, adding an element to first index
console.log(animals);

animals.splice(1,1,'Lion') // deleting 1 element after index one adding a element (so here an updation happened ) 
console.log(animals)

animals.splice(3,2) // deleting 2 elements from index 3
console.log(animals);

// destructuring array 

const ar1 = ['kerala', 'Malayalam', 14,['Malappuram', 'Kannur','Kozhikode']]
let = [state , language, Districts, [d1, d2, d3]] = ar1
console.log(state)
console.log(language)
console.log(Districts)
console.log(d1)
console.log(d2)
console.log(d3)




// destructing array 


