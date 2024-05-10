
// high-order and callback fn 

function highorder(fun){
    console.log('executing ho')
    fun();
}
function callback(){
    console.log('excetuing callbackfn')
}

highorder(callback)


// simple example of first class fn 

var greet = (name)=>{
    console.log('hello ' + name )
}
greet('sai')

// closure 
function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++; 
        console.log(count)   
    };

}

const x = createCounter()
x()
x()
x()

// call back 

function fetchedData(callback) {
    setTimeout(() => {
      const data = "This is the fetched data";
      callback(data); // Execute the callback function with the fetched data
    }, 2000);
}

function processData(data) {
    console.log('processed data:', data.toUpperCase());
}
fetchedData(processData);

// prototype

const obj1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

// Define obj2
const obj2 = {
  name: "Mathew",
  age: 35,
};

// Connect obj1 properties and methods to obj2 using prototypes
Object.setPrototypeOf(obj2, obj1);

// Access properties and method of obj1 from obj2
console.log(obj2.name); // Output: John
console.log(obj2.age); // Output: 30
obj2.greet(); // Output: Hello, my
obj1.greet();



// call back hell 

function getData(callback){
    setTimeout(()=> {
        callback(5);
    },1000)
}
function getData1(callback) {
  setTimeout(() => {
    callback(5);
  }, 1000);
}
function getData2(callback) {
  setTimeout(() => {
    callback(5);
  }, 1000);
}
getData((value)=>{
    getData1((value1)=>{
        getData2((value2)=>{
            console.log(value1+value2+value)
        })
    })
})
