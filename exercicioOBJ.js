//1
let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereço: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereço}`);

//2
let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preço: 3500.00
}

console.log(`o produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria} pesando ${produtoEmbalado.peso} kg, esta a venda por R$ ${produtoEmbalado.preço}`)

//3
class Imovel {
    constructor(quartos, tipo, endereço){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereço = endereço
    }
    exibirInformações(){
        return `${this.tipo} com ${this.quartos} quartos, localizado na ${this.endereço}`
    }
}

let casa = new Imovel(3, 'Sobrado', 'Rua das Dores,Bairro Programador, n° 1010.');
console.log(casa.exibirInformações());

let ap = new Imovel(2, 'Apartamento', 'Rua da Depressão, Bairro da Solidão, n° 666.')
console.log(ap.exibirInformações());

//4

import entradaDados from 'readline-sync';
let nome = entradaDados.question("Informe seu nome: ")
console.log(`ola, ${nome}`);


