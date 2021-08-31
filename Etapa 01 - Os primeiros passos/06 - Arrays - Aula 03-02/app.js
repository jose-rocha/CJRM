//  arrays

let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider Man'

const ages = [31, 25, 39, 40]
const randomArray = ['Parker', 'Diana', 19, 18]
console.log(heroes, ages[1], randomArray)
 
// métodos de arrays
console.log(heroes.length)

const joinHeroes = heroes.join(', ')
console.log(joinHeroes)

const idexOf25 = ages.indexOf(25)
console.log(idexOf25)

const moreHeroes = heroes.concat(['Superman', 'Wolveriene'])
console.log(moreHeroes)

const pushHeroes = heroes.push('Cyclops', 'hulk') // adiciona item no array original
console.log(pushHeroes, heroes)

const popHeroes = heroes.pop() //remove o ultimo item do array
console.log(popHeroes, heroes)

