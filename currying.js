function add (a){
    return function add(b){
        return function add(c){
            console.log(a+b+c)
        }
    }
}

add (1)(2)(3)
