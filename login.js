const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    login();
    }

)
    


function login(){
    const cnpj= document.getElementById("cnpj");
    const senha = document.getElementById("senha");
    
    const cnpjDigitado = cnpj.value;
    const senhaDigitada = senha.value;

    if(cnpjDigitado === "teste" && senhaDigitada === "123"){
        window.location.href="poslogin.html"
    }else{
        alert("algo esta errado ")
    }

}

const botao_entrar = document.getElementById("botao_entrar")
    botao_entrar.addEventListener("click", login)