
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

