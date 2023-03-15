"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Próxima aula 
// // Usando a interface para criar um tipo custom
// interface Carro {
//     modelo:string,
//     placa:string,
//     renavan:number
// }
const prompt = (0, prompt_sync_1.default)();
let modeloVeiculo;
let listaDeVeiculos = [];
let quantidadeVeiculos;
quantidadeVeiculos = Number(prompt('Quantos veículos quer cadastrar? '));
// listaDeVeiculos.push({modelo:'Fox',placa:'teste5555',renavan:555555})
// Recebendo valor no prompt
for (let i = 0; i < quantidadeVeiculos; i++) {
    modeloVeiculo = prompt('Digite o modelo do veículo: ');
    listaDeVeiculos.push(modeloVeiculo);
}
// Exibindo no console
console.table(listaDeVeiculos);
