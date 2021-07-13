const dados = [email = document.querySelector('#emailLogin'), senha = document.querySelector('#PassWord')]



function verification(){
    if(senha.value.length == '' || email.value.length == ''){
        alert('digite seus dados de login')
    }
}