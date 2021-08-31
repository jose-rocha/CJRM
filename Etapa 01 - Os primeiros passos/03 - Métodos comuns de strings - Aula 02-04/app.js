// Métodos comuns de strings
const email = 'laracroft@rogermelo.com'
console.log(`Email: ${email}`)

// Método indexOf = índice de
const userName = 'João'
console.log(`Mostra em qual posição está o caractere passado 
"${userName.indexOf('ã')}"`)

// Método lastIndexOf = último índice de 
const lastIndexOfA = email.lastIndexOf('a')
console.log(`Método lastIndexOf '${lastIndexOfA}'`)

const emailSlice = email.slice(0, 9)
const emailSlice2 = email.slice(10, 19)
console.log(`Método slice "${emailSlice }"
pega do primeiro argumento até o segundo argumento passado 
"${emailSlice2}"`)


// Método replace = substituir
const userName2 = 'Pailhaço'
const userName2Modyfy = userName2.replace('h', '-')
console.log(userName2Modyfy)

const email2 = 'josemarlerocha@gmail.com'
const modifyEmail = email2.replace('josemarlerocha@gmail.com', 'assistenteloop@hotmail.com')
console.log(modifyEmail)


