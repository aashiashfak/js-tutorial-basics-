class Employee {
    constructor(name, age, salary){
        this.name = name,
        this.age = age,
        this.salary =salary
    }

    getInfo(){
        console.log(`Name:${this.name}\nAge:${this.age}\nSalary:${this.salary}`)
    }
}

const e1 = new Employee('Akash',23,'85000')
const e2 = new Employee('Abhinv',21,'80000')

console.log(e2.name)
e1.getInfo()
e2.getInfo()