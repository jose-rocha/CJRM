// usando concatenação
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Mateus Saad'
const postComments = 15

// usando template strings
// const postMessage = 'O post "'+ postTitle + '"" do '+ postAuthor +', tem '+ postComments + ' comentários.'
const postMessage = `O post "${postTitle}" do ${postAuthor}, tem ${postComments} cometários.`
console.log(postMessage)
console.log('Você manja do filme \'As barnquelas\'?')


// criando templates HTML 
const body = document.querySelector('body')
const html = `
    <h2>${postTitle}</h2>   
    <p>${postAuthor}</p>
    <span>${postComments}</span>

`
console.log(html)

body.innerHTML += html