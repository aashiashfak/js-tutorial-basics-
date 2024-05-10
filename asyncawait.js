const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve(["JavaScript", "HTML", "CSS"]);
        reject('Api failed')
    },2000)
  
});

const fetchedData = async () =>{
    try{
        const response = await promise1  
        console.log(response)
        console.log('gosoidoif')
    }catch(error){
        console.log(error)
    }
}
    
fetchedData()
