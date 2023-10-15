console.log("It's Working ");

let color= document.querySelector('input')
let button= document.querySelector('#choose')
let click= document.querySelector('.button')
let backg=document.querySelector('body')

click.addEventListener('click',()=>{
    let value= color.value;
    backg.style.backgroundColor=value;
})

