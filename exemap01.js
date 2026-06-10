//exercicio 01
let numeros = [1, 2, 3, 4, 5]
let dobro = numeros.map(n => n * 2)
console.log(`Os numeros na array são ${numeros} e o dobro deles são ${dobro}`)

//exercicio 02
let nomes = ["aizza", "maria", "max", "flavia"]
let primeiroNome = nomes.map(nome => {
    return nome.charAt(0).toUpperCase() + nome.slice(1)
})
console.log(primeiroNome)
//exercicio 3
let frutas = ["Maça", "Banana"]
let [fruta01, fruta02] = frutas
console.log(fruta01, fruta02)

//exercicio 4
let a = 1
let b = 2
console.log([a, b] = [b, a])

//exercicio 5
const dados = [
    { nome: "Nina", idade: 15 },
    { nome: "Aizza", idade: 20 },
    { nome: "Maria", idade: 54 }
]

let dadoNome = dados.map(nome => nome.nome)
let dadoIdade = dados.map(idade => idade.idade)
console.log("Nomes: " + dadoNome, "\nIdades: " + dadoIdade)

//exercicio 6

const produtos = ["Celular", "Notebook", "Tablet"]

const listarProdutos = produtos.map((produto, id) => {
    return `ID: ${id} | Produto: ${produto}`
})
console.log(listarProdutos)

//exercicio 7

const numerosInt = [1, 2, 3, 4, 5]
const numerosString = numeros.map(n => n.toString())
console.log(numerosString)

//exercicio 8

const cidades = [
    { nome: 'São Paulo', população: 1000000 },
    { nome: 'Campinas', população:  1100000 },
    { nome: 'Rio de Janeiro', população: 2000000 }
]

const nomeCidade = cidades.map(cidade => cidade.nome)
console.log(`As cidades registradas são: ${nomeCidade}`)

//exercicio 9
const cores = [
    {cor:""},
    {cor:""},
    {cor:""}
]

const definirCor = cores.map((cor, id) => {
   return `A ${id +1}° cor é: ${cor.cor = "Verde"}`
})
console.log(definirCor)

//exercicio 10

const dadosNumericos = [10,20,30,40,50,60]
const [primeiroNumero, ...rest] = dadosNumericos
console.log(`Dados do array: ${dadosNumericos}\nPrimeiro numero do array: ${primeiroNumero} \nRestante: ${rest}`)