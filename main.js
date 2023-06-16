let form = document.getElementById('form')
linha = ''
let arrayNomes = []
let arrayNumeros = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    cadastrar()
})

function cadastrar(){
    var nome = document.getElementById('nome-contato')
    var numero = document.getElementById('numero-contato')
    
    if (arrayNomes.includes(nome.value)){
        alert('Nome de contato já adicionado, por favor, escolha outro!') 
    } else if (arrayNumeros.includes(numero.value)){
        alert('Número já cadastrado. Por favor, Cadastre outro!')
    } else {
        arrayNomes.push(nome.value)
        arrayNumeros.push(numero.value)
        var item = '<tr>'
        item += `<td>${nome.value}</td>`
        item += `<td>${numero.value}</td>`
        item += '</tr>'
        linha = item
        mostrar()
    }
    nome.value = ''
    numero.value = ''
}

function mostrar(){
    var table = document.getElementById('table-body')
    table.innerHTML += linha
}