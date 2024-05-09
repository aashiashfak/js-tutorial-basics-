// console.log(x)

// console.log(getName)

// var x = 8
// var getName = () => {
//     ans = x*x
//     console.log(ans)
// }
// console.log(x)

// getName()

// var x = 1
// a()
// b()
// console.log(x)
// function a () {
//     var x = 10
//     console.log(x)
// }
// function b (){
//     var x = 100
//     console.log(x)
// }

// ------------------------------------------scope-------------------------------

// function a1 (){
//     b()
//     function b(){
//         console.log(a)
//     }
// }

// a1()
// var a = 10

// var a

// var c = 'small'

// var d =  10

// var b = c + d

// console.log(b)

// let  a = 10

// a = 100

// a = 900

// console.log(a)

// function x (){
//    for (var i=1; i<=5; i++){
//       function close(i){
//          setTimeout(  ()=> {
//             console.log(i);
//          }, i*100)
//       }
//       close(i)
//    }
//    console.log("Namasthe")
// }
// x();

// var greet = function (name) {
//    console.log("hello "+name);

// };

// greet("babu");

// closure------------------------------

// function a() {
//    let x=10;
//    function b() {
//       let x=100;
//       console.log(x);
//    }
//    return b;
// }
// let x=100;
// a()();

// x = 5
// x = 10

// var count = 0

// function a (m){
//    console.log(count)
//    console.log(m)
//    a1 = 'iam a'
//    while (count <1 ){
//    count++
//    b(a1)
//    break;
//    }
// }

// function b(a1){
//    b1 = 'iam b'
//    console.log(a1)
//    a(b1)
// }

// a()

// c = b()

// console.log(c)

// call back function ----------------------

// setTimeout(function () {
//   console.log("after 1 sec");
// }, 1000);

// function a(b) {
//   console.log("a");
//   b();
// }

// a(function b() {
//   console.log("b");
// });

// var count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button clicked", ++count);
// });


// let x = 2+ 3 + "5"
// console.log(x)


// var a = 10, b = "10";

// console.log(a===b)

// var dayOfWeek = 1;

// // Use a switch statement to perform different actions based on the value of dayOfWeek
// switch (dayOfWeek) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("Invalid day of the week");
// }


// for (var i=1; i<=4; i++){
//    console.log(i)
// }

// var i=1
// while (i<=4){
//    console.log(i);
//    i++;
   
// }

// console.log(greet)

// // Function expression
// var greet = function(name) {
//     return "Hello, " + name + "!";
// };

// // Calling the function
// console.log(greet("John"));

// var a = ['lion', 'Tiger', 'Elephant']
// a[0]= 'Monkey';
// console.log(a);

// var x = a.length;

// for (i=0; i<x; i++){
//    console.log(a[i])
// }

// a[x]="Fox"
// console.log(a)

// a.push('Cheetah','Zebra')
// console.log(a)

// a.sort()
// console.log("sorted array --===",a);

// a.shift(),a.pop()
// console.log(a,'pop and shift')

// a.splice(0,2)
// console.log(a);

// const y = [7,91,56,9,8]
// console.log(y.sort((a,b)=>b-a))

// let n = '2';
// let m = 2;
// let o = 5;

// let z = n+m+o
// console.log(n+o+m)


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach( (num)=> {
//   console.log(num);
// });

// console.log("index of 1 is",numbers.indexOf(1))
// const x = "Hello"
// let y = x.at(-1);
// console.log(y)


// const z = "malayalam bro MalayalaM"

// let x = z.replace( /MalayalaM/i,'English');
// console.log(x)



// const z = "malayalam bro malayalam"

// let x = z.replaceAll('malayalam', "English");
// console.log(x);

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/gi));


// let x = 45
// y = x.toString()
// console.log(y)
// console.log(typeof(y))


// let u = 899.988;
// let i = u.toFixed()
// console.log(i)


// const fruits = ["Banana", "Orange", "Apple", "Mango",1];
// fruits.forEach( (fruit)=> {
//    console.log(fruit);
// });
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach( (num)=> {
//   console.log(num);
// });

// let Numbers = [1,2,3,4,5]

// Numbers = [34,5]

// console.log(typeof(Numbers))

// // object 

// const person = {'name':"Aashi",'age':24, 'place':'Malappuram'}
// console.log(
//   `iam ${person.name} , iam ${person.age} yers old and iam from ${person.place}`
// );
// console.log(typeof(person))

// // to check array is Array or not 
// var x = Array.isArray(fruits)
// console.log(x)


const arr = [1,2,3,4,5]
// arr.splice(2,2,'a','b')
// console.log(arr)


let x = arr.map(function(num){
   return 2 * num;  
})

let y = arr.filter((num)=> {
   return num%2==0
});

console.log('x is :', x)
console.log("y is :", y);