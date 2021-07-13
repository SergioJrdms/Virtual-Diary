let dados = [nome = document.querySelector('input#Fname'), email = document.querySelector('input#Cademail'), senha = document.querySelector('input#Password')]

let res = document.getElementById('res')
res.innerHTML = ''
function cadastrar(){
    if(nome.value.length == ""){
        alert("Não tem nada aqui! Digite seus dados!")
    }
    if(senha.value.length < 5){
        res.innerHTML = "A senha deve ter pelomenos 5 Caracteres"
    }
}

function clear(){
    if(cadastrar() == true){
        dados = ''
    }
}
