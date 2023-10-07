//atividade 1

//Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar em uma festa 
//(idade mínima de 18 anos). Exiba uma mensagem informando se a entrada é permitida ou não.

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))

function maiorIdade(idade){
    if(idade > 18){
        return true
    } else {
        return false
    }
}

alert(`Nome: ${nome}\nIdade: ${idade}\nMaior de Idade? ${maiorIdade(idade)}`)

// atividade 2

//Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e calcule o seu IMC. 
//Exiba uma mensagem com o resultado, indicando se o usuário está abaixo do peso, no peso ideal ou acima do peso.

let kg = Number(prompt("Qual o seu peso?"))
let altura = Number(prompt("Qual a sua altura? (Exemplo: 1.70)"))

let imc = kg / (altura * altura)

if(imc<18.5){
    alert("Abaixo do peso")
} else if(imc>18.5 && imc<24.9){
    alert("Peso saúdavel")
} else if(imc>25 && imc<29.9){
    alert("Sobrepeso")
} else if(imc>30 && imc<34.9){
    alert("Obesidade grau I")
} else if(imc>35 && imc<39.9){
    alert("Obesidade grau II")
} else if(imc>40){
    alert("Obesidade grau III (Obesidade mórbida)")
}

//atividade 3

//Crie um programa que solicite ao usuário um valor em reais e faça a conversão desse valor para dólares, 
//utilizando uma taxa de câmbio fixa. Exiba o valor convertido.

let reais = Number(prompt("Qual a quantidade em reais para converter a dolares?"))

function conversaoDolar(reais){
    preçoDolar = 5;
    dolares = reais / preçoDolar

    return dolares
}

alert(`Reais: ${reais}\nDolares ${conversaoDolar(reais)}`)

//atividade 4

//Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto e verifique se há 
//quantidade suficiente em estoque. Caso haja, exiba uma mensagem informando a disponibilidade; caso contrário, 
//informe que o produto está indisponível.

let quantidadeProduto = Number(prompt("Qual a quantidade de produtos em estoque?"))
let quantidadeQuerer = Number(prompt("Qual a quantidade que você quer de produtos?"))

if(quantidadeProduto >= quantidadeQuerer){
    alert(`Temos os produtos em estoque`)
} else {
    alert(`Não temos os produtos em estoque`)
}

//atividade 5

// Crie um programa que solicite ao usuário as notas de três provas e seus respectivos pesos. 
//Calcule a média ponderada dessas provas e exiba o resultado.

let pesoProva1 = Number(prompt("Qual o peso da prova 1?"))
let notaProva1 = Number(prompt("Qual sua nota na prova 1?"))

let pesoProva2 = Number(prompt("Qual o peso da prova 2?"))
let notaProva2 = Number(prompt("Qual sua nota na prova 2?"))

let pesoProva3 = Number(prompt("Qual o peso da prova 3?"))
let notaProva3 = Number(prompt("Qual sua nota na prova 3?"))

let mediaPonderada = (((pesoProva1*notaProva1)+(pesoProva2*notaProva2)+(pesoProva3*notaProva3))/(pesoProva1+pesoProva2+pesoProva3))

alert(`A sua média ponderada foi de: ${mediaPonderada}`)

// atividade 6

//Crie um programa que solicite ao usuário uma lista de compras, 
//permitindo que ele digite vários itens separados por vírgula. 
//Em seguida, exiba a lista de compras digitada pelo usuário.

let compras = prompt("Digite os itens da lista de compras separados por vírgula:");
let listaCompras = compras.split(',');

for(i = 0; i < listaCompras.length; i++){
    alert(listaCompras[i])
}

// atividade 7

//Crie um programa que solicite ao usuário um login e uma senha. 
//Em seguida, verifique se o login e a senha correspondem aos valores pré-definidos. 
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let login = prompt("Defina seu login")
let senha = prompt("Defina sua senha")

let confirmarLogin = prompt("Digite seu login para entrar")
let confirmarSenha = prompt("Digite sua senha para entrar")

if(confirmarLogin==login && confirmarSenha==senha){
    alert("Logando")
} else {
    alert("Inválido")
}

// atividade 8

//Crie um programa que solicite ao usuário o valor de um produto e a porcentagem de desconto a ser aplicada. 
//Calcule o valor do desconto e exiba o valor final do produto com o desconto aplicado.

let preçoProduto = Number(prompt("Qual o preço do produto? (em reais)"))
let descontoProduto = Number(prompt("Qual o desconto para tal produto? (em porcentagem)"))

let desconto = preçoProduto-(preçoProduto*(descontoProduto/100))

alert(`O preço do produto com desconto fica: ${desconto}`)