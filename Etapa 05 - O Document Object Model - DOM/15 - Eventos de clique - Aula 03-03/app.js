const button = document.querySelector('button')

// button.addEventListener('click', ()=>{
//     console.log('Clicou no botão!');
// })

const lis = document.querySelectorAll('li')

lis.forEach(li =>{    
    li.addEventListener('click', e =>{
        e.target.classList.toggle('colorRed')
        const clikedElement = e.target

        clikedElement.style.textDecoration = 'line-through'        
    })
})