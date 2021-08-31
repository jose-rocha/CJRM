const article = document.querySelector('article')
// console.log(article.children);

// Convertendo HTMLCollection em NodeList/array
// console.log(Array.from(article.children))

// const articleArray = Array.from(article.children)
// articleArray.forEach((element) =>{
//     element.classList.add('article-element')
    
// })

// Descobt=rindo o pai dos elementos/tags
const title = document.querySelector('h2')
console.log(title.parentElement.parentElement);