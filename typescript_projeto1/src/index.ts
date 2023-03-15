import promptSync from 'prompt-sync';

// Próxima aula 
// // Usando a interface para criar um tipo custom
// interface Carro {
//     modelo:string,
//     placa:string,
//     renavan:number
// }

const prompt = promptSync();
let modeloVeiculo: string;
let listaDeVeiculos = [];
let quantidadeVeiculos:number;
quantidadeVeiculos = Number(prompt('Quantos veículos quer cadastrar? '));
// listaDeVeiculos.push({modelo:'Fox',placa:'teste5555',renavan:555555})
// Recebendo valor no prompt
for (let i = 0; i < quantidadeVeiculos; i++) {
    modeloVeiculo = prompt('Digite o modelo do veículo: ');
    listaDeVeiculos.push(modeloVeiculo);
}

// Exibindo no console
console.table(listaDeVeiculos)
