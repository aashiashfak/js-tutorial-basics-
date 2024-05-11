// get element by id

const head = document.getElementById('head1')
head.style.color = 'grey'
head.innerHTML = 'hey world!'

//get element by className

const subject = document.getElementsByClassName("subject");
console.log(subject)
Array.from(subject).forEach(subject =>{
    subject.style.color = "mediumseagreen";
})
subject[0].innerHTML = 'JAVASCRIPT'

// get element by TagName

const para = document.getElementsByTagName('p')
console.log(para)
Array.from(para).forEach(para=>{
    para.style.color = "cadetblue";
})

// get element by name 

function greet() {
  const nameInput = document.getElementsByName("name")[0];
  const name = nameInput.value.trim(); // Trim any leading or trailing whitespace
  const capitalizedValue = name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const greetName = document.getElementById("greetName");
  greetName.textContent = "Hello " + capitalizedValue;
}

// get element by css selectors (QuereySelectorAll)

const domains = document.querySelectorAll('li')
Array.from(domains).forEach(domain=>{
    domain.innerHTML = `Learn ${domain.textContent}`;
    domain.style.color = "cornflowerblue";
})

// query selector

const domainHead = document.querySelector('#domain-head')
domainHead.style.color = "darkslateblue";

// DOM create and remove fn 

const message = document.createElement('h1')
const box = document.getElementById('box')

function create(){
    message.innerHTML = 'Hello World!'
    box.appendChild(message)
}

function remove(){
    message.remove()
}


const colorChangePara = document.getElementById('color_change_para')
const btn = document.getElementById('btn')

btn.addEventListener("click", changeColor)

function changeColor(){

    const currentColor = colorChangePara.style.color
    if (currentColor === 'red'){
        colorChangePara.style.color = 'blue'
    }else{
        colorChangePara.style.color = 'red'
    }
}
