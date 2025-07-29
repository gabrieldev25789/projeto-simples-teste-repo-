const btn = document.querySelector("#gerar")
const sugerirSenha = document.querySelector("#sugerir-senha")
const senhaGerada = document.querySelector("#senha-gerada")
const senhaRandom = document.querySelector("#senha-random")

const nome = document.querySelector("#nome")
const sobreNome = document.querySelector("#sobrenome")
const senha = document.querySelector("#senha")
const confirmarSenha = document.querySelector("#confirm-senha")

const button = document.querySelector("#enviar")


function validarCadastro(){

    if(!nome.value){
        alert("digite o seu nome")
    }

    if(!sobreNome.value){
        alert("digite o seu sobrenome")
    }

    if(!senha.value){
        alert("digite a sua senha")
        return 
    }

    if(!confirmarSenha.value){
        alert("confirme a sua senha")
        return
    }

    if(confirmarSenha.value !== senha.value){
        alert("senhas não condizem")
    }

}

const getSymbols = () => {
    const symbols = "!@#$¨&()_++:><.<*-+."
        return symbols[Math.floor(Math.random() * symbols.length)]
}

const getLetters = () => {
    const letras = "qwertioyupsalfmvjghlKWSTUYCMNAGFÇ"
    return letras[Math.floor(Math.random() * letras.length)]
}

const getNumbers = () => {
    const numeros = "0123456789"
    return numeros[Math.floor(Math.random() * numeros.length)]
}

function gerarSenha1(){

    const gerarSenha = []

    const number = getNumbers() 
    const letter = getLetters() 
    const symbol = getSymbols() 
    
    gerarSenha.push(number + letter + symbol)
    
    senhaGerada.classList.remove("hide")
    senhaRandom.textContent = gerarSenha

    return 
}

sugerirSenha.addEventListener("click", () => {
gerarSenha1()
 tamanhos()
})


button.addEventListener("click", () => {
    validarCadastro()
}) 

// TESTANDO ALTERAÇÃO


