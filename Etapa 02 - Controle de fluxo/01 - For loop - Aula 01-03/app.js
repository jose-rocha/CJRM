// for loop
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

const resultArr = document.querySelectorAll('div')
console.log(resultArr[0]);
const names = ['Jonathan', 'Marcos', 'Cigarro Solto']

for(let i = 0; i < names.length; i++){
   const HTMLTemplate = `<p>${names[i]}</p>`
   console.log(HTMLTemplate)

   resultArr[1].innerHTML = HTMLTemplate
}


// let o = 0
// let numbers = 5
// while(o < numbers){
//     o++
//     console.log(o)
// }

let arr = [0, 1, 2, 3, 4, 5]

arr.forEach(ar => console.log(ar)
    )


    // const input = document.createElement('input')
    // // input.setAttribute('type', 'radio')
    // // input.checked = true
    // console.log(input)
    // const h1 = document.querySelector('h1')
    // h1.append(input)
const range = document.querySelector('input')
const result = document.querySelectorAll('div')

range.value = 0
function update(){
    if(range.value ===  '50'){
        // console.log('Está na metade')
    }
    result[0].textContent = 'O valor é ' + range.value
    
}

setInterval(update, 1)

// console.log(range)