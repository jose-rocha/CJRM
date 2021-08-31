const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    li.style.color = 'red'

    ul.append(li)
})

ul.addEventListener('click', e => {
    // console.log(e)
    const clickedElement = e.target

    if(clickedElement.tagName === 'LI'){
        clickedElement.remove()
    }
})

// const lis = document.querySelectorAll('li')

// lis.forEach(li =>{    
//     li.addEventListener('click', e =>{
//         const clikedElement = e.target
//         // clikedElement.classList.toggle('colorRed')
//         clikedElement.remove()
           
//     })
// })




