// Tipos no typescript

// Tipo Any
let anyVar: any = 'Teste';
// console.log('tipo Any', anyVar);
anyVar = 5;
//console.log('Tipo any', anyVar);

// // Tipo boleano
let booleanVar: boolean = false;

// // Tipos de número
let decimal: number = 6;
// console.log('Tipo Decimal', decimal);
let hex: number = 0xf00d;
// console.log('Tipo hexadecimal',hex);
let binary: number = 0b1010;
// console.log('Tipo Binario',binary);
let octal: number = 0o744;
// console.log('Tipo octal',octal);
let big: bigint = 9007199254740991n;
// console.log('tipo bigint',big);

// //Tipo string ou texto
let stringVar: string = 'Texto' + 4;
// console.log(stringVar);

// // Tipo array 
let arrayVar: number[] = [1, 2, 3];
//console.log(arrayVar);
arrayVar.push(5);
//console.log(arrayVar);

// // Outra maneira de escrever
let arrayVarOuther: Array<number> = [1, 2, 3];
//console.log(arrayVarOuther);

// // Tipo Tuple ou array Tuple
let pessoaIdade: [string, number];
// Atribuindo valores por posição
pessoaIdade = ['Cleyton', 32];
// console.log(pessoaIdade);

// // Tipo Enum ou Enumerador
enum EnumVar {
    aprovada=250,  
    reprovada=100, 
    emAnalise=300, 
    pix=400
}
// console.log(EnumVar); // Posição
// console.log(EnumVar.recuperacao);
// console.log(EnumVar[1]); // Valor 

// // Tipo object ou objeto
let varObject = {
    nome: 'Cleyton',
    idade: 25,
    novaPropriedade:''
}
varObject.novaPropriedade = 'x'
console.log(varObject);

// // Usando interface
interface IAddress {
    street:string;
    number: number;
    city:string;
    state:string;
}

interface IUser {
    name: string;
    age: number;
    email: string;
    isAdmin?: boolean; // Propriedade opcional
    address?:IAddress;
}

let user:IUser = {
    name:'Cleyton',
    age:32,
    email:'professor.cleyton.mach1@gmail.com',
    address:{
        street:'Rua teste',
        number:123,
        city:'Osasco',
        state:'SP'
    }
}

console.log(user)



/* Explicação de spread operator */

let listaDeConvidadosEspeciais: Array<string> = 
['Pablo', 'Geovana', 'Fabio'];
let convidadosGeral:Array<string> = [...listaDeConvidadosEspeciais];
convidadosGeral.push('Paulo');
convidadosGeral.push('Pedro');
// console.log(listaDeConvidadosEspeciais);
// console.log(convidadosGeral);