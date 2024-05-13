const promise = new  Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve('Failed')
   },1000)
})

promise.then((response)=>{
   console.log('first')
   console.log(response)
}).catch((error)=>{
    console.log(error)
})



function getData1(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num);
    },1000)
  })
}
function getData2(num) {
   return new Promise((resolve, reject)=>{
      setTimeout(() => {
         resolve(num);
      }, 1000);
   })
}

getData1(5)
   .then((response)=>{
      console.log("sec")
      return getData2(40)
   .then((response1)=>{
      console.log(response+response1)
   })
})



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["JavaScript", "HTML", "CSS"]);
  }, 1000);
});


const pormise2 = new Promise((resolve, reject)=>{
   setTimeout(() =>{
      resolve(["Python", "DRF"]);
   },1000);
  
});

const allPrmoises = Promise.all([promise1, pormise2]);

allPrmoises
   .then((response)=>{
      console.log('third')
      console.log(response.flat())
   })
   .catch((error)=>{
      console.log('Error API failed')
   }).finally(()=> console.log('End'))



// console.log("Script start");

// // Define a promise
// const promise3 = new Promise((resolve, reject) => {
//   // This code runs synchronously when the promise is created
//   console.log("Promise created");

//   // Simulate an asynchronous operation
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 1000);
// });

// // Add a macrotask to the macrotask queue
// setTimeout(() => {
//   console.log("Macrotask executed");
// }, 1000);

// // Add a microtask to the microtask queue
// promise3.then((result) => {
//   console.log("Microtask executed:", result);
// });



// console.log("Main script executed");

// console.log("Script end");
