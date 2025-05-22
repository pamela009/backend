import entradaDados from 'readline-sync';
//1
let dia = entradaDados.question('infrome o dia da semana');
 switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;       
    case 7:
        console.log("Sabado");
        break;
        
    default:
        console.log("Valor Invalido! \nInforme o valor do intervlálo de 1 a 7");
        break;
      }

//2
let mes = Number(entradaDados.question('infrome o dia da semana'))
 switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;       
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;  
    case 12:
        console.log("Dezembro");
        break;    
    default:
        console.log("Valor Invalido! \nInforme o valor do intervlálo de 1 a 12");
        break;
      }

//3
let x = entradaDados.questionFloat("Informe o primeiro valor: ")
let y = entradaDados.questionFloat("Informe o segundo valor: ")
let op = entradaDados.questionFloat("Escolha a opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão\n")
 switch(op) {
    case '1':
        console.log(`${x} + ${y} = ${x + y}`);
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;

   default:
    console.log("opção Invalida")
    break;
 }
      
 //4
 let salario = entradaDados.questionFloat("Informe seu salario: ")
 let cat = entradaDados.questionFloat("Informe a categoria de bonificação: ")
 let bonus = 0

switch(cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo Salario: ${(salario + bonus).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo Salario: ${(salario + bonus).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)
    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo Salario: ${(salario + bonus).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo Salario: ${(salario + bonus).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)
        break;

    default:
        console.log("categoria invalida");
        break;
}


