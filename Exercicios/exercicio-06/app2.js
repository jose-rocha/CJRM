/*
- O array "crazyArray2" (abaixo) possui 3 tipos de dados: numbers, booleans  
  e strings;
- Considerando este array, substitua os "X" da frase abaixo pelas informações  
  corretas;
- Gere essas informações à partir de um for loop;
- Exiba a frase no console.

"O crazyArray2 tem X booleans, X números e X strings."
*/

const crazyArray2 = [true, 869, 'oi', true, 71, false, 83, '35', true, 397, 'js', false, 35, 'node']
let isABoolean = 0
let isANumber = 0
let isAString= 0

for(let i = 0; i < crazyArray2.length; i++){
    const isTypeof = typeof crazyArray2[i]
    const isItemTypeOfABoolean = isTypeof === 'boolean'
    const isItemTypeOfANumber = isTypeof === 'number'

    if(isItemTypeOfABoolean ){
        isABoolean++
    }else if(isItemTypeOfANumber){
        isANumber += 1
    }else{
        isAString = isAString + 1
    }
}

console.log(`O crazyArray2 tem ${isABoolean} booleans, ${isANumber} números e ${isAString} strings.`)

/*
- Abaixo do array "randomNumbers2", utilize um for loop para gerar 2 novos  
arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
array com apenas os números pares;
- Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
do último número ímpar e do último número par devem constar na frase;

- Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
ser 0.

"Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

const randomNumbers2 = [73, 4, 67, 10, 31, 58]
