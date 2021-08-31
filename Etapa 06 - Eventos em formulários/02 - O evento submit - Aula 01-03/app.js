const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')


form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(form.username.value)
    console.log(e.target.username.value)
    
})