// const promise = new  Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('Failed')
//     },2000)
// })

// promise.then((response)=>{
//    console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })



// function getData1(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(num);
//     },1000)
//   })
// }
// function getData2(num) {
//    return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//          resolve(num);
//       }, 1000);
//    })
// }

// getData1(5)
//    .then((response)=>{
//       return getData2(40)
//    .then((response1)=>{
//       console.log(response+response1)
//    })
// })



const promise1 = new Promise((resolve, reject)=>{
   resolve(['JavaScript', 'HTML', 'CSS']);
});

const pormise2 = new Promise((resolve, reject)=>{
   reject(['Python', 'DRF']);
});

const allPrmoises = Promise.race([promise1, pormise2]);

allPrmoises
   .then((response)=>{
      console.log(response.flat())
   })
   .catch((error)=>{
      console.log('Error API failed')
   }).finally(()=> console.log('End'))