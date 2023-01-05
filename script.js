function soma(){
    var valor1 = window.prompt("Digite um valor")
    var valor2 = window.prompt("Digite um segundo valor")
    var operacao = parseInt(valor1) + parseInt(valor2)
    // window.confirm(`A Soma de ${valor1} e ${valor2} é igual a ${operacao}`)
    //document.getElementsByTagName("input").textContent = "operacao"
    document.getElementById("resultado").innerHTML = operacao
}
function subtracao(){
    var valor1 = window.prompt("Digite um valor")
    var valor2 = window.prompt("Digite um segundo valor")
    var operacao = parseInt(valor1) - parseInt(valor2)
    document.getElementById("resultado").innerHTML = operacao
}
function multiplicacao(){
    var valor1 = window.prompt("Digite um valor")
    var valor2 = window.prompt("Digite um segundo valor")
    var operacao = parseInt(valor1) * parseInt(valor2)
    document.getElementById("resultado").innerHTML = operacao
}
function divisao(){
    var valor1 = window.prompt("Digite um valor")
    var valor2 = window.prompt("Digite um segundo valor")
    var operacao = parseInt(valor1) / parseInt(valor2)
    document.getElementById("resultado").innerHTML = operacao
}

function desenvolvedora(){
    var dev = window.alert("Desenvolvedora:   Hellen Lima Araújo \n 2º Ano de Informática")
    console.log(dev)
}