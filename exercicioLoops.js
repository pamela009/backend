import rl from 'readline-sync';
//1
let num = rl.questionInt("Informe o numero para gerar a tabuada: ")
let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

//2
let numAlunos = rl.questionInt("Informe o numero de alunos da turma: ");

let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
    console.log(`Aluno ${contAlunos}`);

    let contBimestres = 1;
    let somaNotas = 0;

    while (contBimestres <= 4) {
        let nota = rl.question(`Informe a nota do ${contBimestres}º bimeste do aluno ${contAlunos}:`);
        somaNotas += nota;
        contBimestres++;
    }

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Media do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}

let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Media Geral da Turma: ${mediaGeralTurma.toFixed(2)}`);

//3
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = rl.questionInt("Tente advinhar o numero (entre 1 a 100):");
    if (palpite === numeroAleatorio) {
        console.log("Parabens, voce advinhou o numero!")
    } else if (palpite < numeroAleatorio) {
        console.log('Tente um numero maior.')
    } else {
        console.log("Tente um numero menor.")
    }

} while (palpite !== numeroAleatorio);

//4
for (let i = 1; i <= 10; i++) {

    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `)
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `)
    let impostoRenda = 0;
    
    if (salario <= 2100) {
    impostoRenda = 0;
    }
    else if (salario <= 2000) {
    impostoRenda = salario * 0.075;
    }
    else if (salario <= 3750) {
    impostoRenda = salario * 0.15;
    }
    else if (salario <= 4660) {
    impostoRenda = salario * 0.225;
    }
    else {
    impostoRenda = salario * 0.275;
    }
    
    console.log(`\n---Imposto de renda a ser pago---`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}`);
    }
//6
const pessoa = {
    nome: "Miguel",
    idade: 37,
    sexo: 'M'
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

let cores = ["Azul", "Branco", "Verde", "Preto", "Roxo"];

for (const elemento of cores);
