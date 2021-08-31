const title = document.getElementById('title')
const errors = document.getElementsByClassName('error')
const paragraphs = document.getElementsByTagName('p')
let btn  =document.querySelector('button')
console.log(btn);

btn.addEventListener('click', ()=>{
    paragraphs[3].setAttribute('class', 'setAttributeJS')
})


 
