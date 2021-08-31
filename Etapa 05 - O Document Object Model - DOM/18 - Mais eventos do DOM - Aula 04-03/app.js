const paragraph = document.querySelector('.copy-me')
const div = document.querySelector('.box')


paragraph.addEventListener('copy', ()=>{
    console.log('Copiou o texto')
})

div.addEventListener('mousemove', e=>{
    // console.log(e);
    div.textContent = `X ${e.offsetX} | Y ${e.offsetY}`
})