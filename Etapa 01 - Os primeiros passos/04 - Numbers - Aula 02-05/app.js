// Inteiros e decimais
const  radius = 10
const pi = 3.14
console.log(radius, pi)

// Operadores aritiméticos
const reminder = 5 % 2 // % le-se resto de
console.log(`O resto de 5 divido por 2 é igual á '${reminder}'`)

const area = pi * radius ** 2
//          3.14 * 10    ^  2 
console.log(`A area é igual á ${area}`) // Ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2 // resolve primeiro(10 - 3) depois ^ 2  e depois * 5  
console.log(crazyOperation)

// Operadores de incremento e decremento
let postLikes = 10
// postLikes = postLikes + 1
// postLikes++
postLikes--
console.log(postLikes)

// operadores addition, subtraction, multiplication e divisão
let curtidas = 20
// curtidas = curtidas + 10
// curtidas += 10
// curtidas -= 5
// curtidas *= 3
curtidas /= 2
console.log(`Número de curtidas é ${curtidas}`)

//  NaN - Not a Number
console.log(7 / 'OI')


// Concatenação de strings com números
const postMessage = 'O post likes tem '+ postLikes + ' curtidas'
console.log(postMessage)



// --------------------------//---------------------------------//
const btn = document.querySelectorAll('button')
let p = document.querySelector('p')
p.style.paddingLeft = '15px'

btn[0].addEventListener('click', ()=>{
    if(p.textContent >= 10){
       return p.textContent
    }
    p.textContent++
})

btn[1].addEventListener('click', ()=>{
    if( p.textContent <= 0 ){
       return p.textContent
    }
    p.textContent--

})