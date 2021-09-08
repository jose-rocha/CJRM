const getTodos = callback =>{
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', ()=>{
        // console.log(request.readyState)
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState === 4
    
        if(isRequestOk){
            callback(null, request.responseText)
            return
        }
    
        if(isRequestNotOk){
            callback('Naõ foi possivel  obter os dados', null, `status: ${request.status}`)
        }
        
    })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()

}

getTodos((err, data, statu)=>{
    console.log('Callback executado')
    if(err){
        console.log(err, statu)
        return
    }
    console.log(data)
})