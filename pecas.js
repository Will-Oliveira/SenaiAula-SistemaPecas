/* ATIVIDADE 1
cd 'desktop/SENAI - Programador Full Stack/UC8 - LÓGICA DE PROGRAMAÇÃO/Atividades/SituacaoProblema - ExercicioPecas'


Sistema de cadastro de peças:

 3 requisitos:

 OK Verificar se o peso da peça é maior de 100g
	OK sim: pode cadastrar
	OK não: nao pode cadastrar

 OK Verificar numero de peças cadastradas, e não pode pode ter mais de 10 peças
	OK > de 10 peças: cadastra
	OK < de 10 peças: não cadastra

 OK Verificar o comprimento do nome da peça
	OK > de 3 caracteres: cadastra
	OK < de 3 caracteres: não cadastra */

// * Comando para executar com Node: node "nome do arquivo.extensão do arquivo"

// Váriaveis, são um espaço na memória para guardar algum valor


let pesoPeca = 102

if(pesoPeca > 100) {
    console.log("Peso maior que 100g; pode cadastrar.")
}
else {
    console.log("Peso menor que 100g; não é possível cadastrar.")
}


let numeroPecas = 9

if(numeroPecas < 10) {
	console.log("Ainda há espaço na caixa, é possível cadastrar a peça")
}
else {
	console.log("Não há mais espaço disponível na caixa")
}


let nomePeca = 'Disco de freio'
	console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca < 3) {
	console.log("Nome da peça muito curto; item não cadastrado")
}
else {
	console.log("Nome de peça adequado; item cadastrado")
}