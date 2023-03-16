// Tipos no typescript

// Tipo Any
let anyVar: any = 'Teste';
console.log('tipo Any', anyVar);
anyVar = 5;
console.log('Tipo any', anyVar);

// Tipo boleano
let booleanVar: boolean = false;

// Tipos de número
let decimal: number = 6;
console.log('Tipo Decimal', decimal);
let hex: number = 0xf00d;
console.log(hex);
let binary: number = 0b1010;
console.log(binary);
let octal: number = 0o744;
console.log(octal);
let big: bigint = 9007199254740991n;
console.log(big);
//Tipo string ou texto
let stringVar: string = "Texto";
console.log(stringVar);

// Tipo array 
let arrayVar: number[] = [1, 2, 3];
console.log(arrayVar);
arrayVar.push(5);
console.log(arrayVar);

// Outra maneira de escrever
let arrayVarOuther: Array<number> = [1, 2, 3];
console.log(arrayVarOuther);

// Tipo Tuple ou array Tuple
let tupleVar: [string, number];
// Atribuindo valores por posição
tupleVar = ["hello", 10];
console.log(tupleVar);

// Tipo Enum ou Enumerador
enum EnumVar {
    aprovado,
    reprovado,
    recuperacao,
}
console.log(EnumVar.aprovado);
console.log(EnumVar.recuperacao);
console.log(EnumVar[1]);

// Tipo object ou objeto
let varObject = {
    nome: 'Cleyton',
    idade: 25
}

console.log(varObject);

// Usando interface
interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

let user:User = {
    name:'Cleyton',
    age:32,
    email:'professor.cleyton.mach1@gmail.com',
    isAdmin:false
}

console.log(user)