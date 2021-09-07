// else e else if statements

const password = 'oi12332oi123'

if(password.length >= 12){
    console.log('senha muito forte =)')
}
else if(password.length >= 8){
    console.log(`Esta senha tem 8 ou mais caracteres`);
}
else{
    console.log('a senha deve conter pelo menos 8 caracteres!')
}