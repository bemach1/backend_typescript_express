// Importando o framwork
import express from 'express';
// Importando o que eu quero utilizar
import { Router, Request, Response } from 'express';

const students = [
{ "id":100, "name": "Cleyton", "age": 32 },
{ "id":101,"name": "Fabio", "age": 31 }, 
{ "id":102,"name": "Pablo", "age": 42 }
];

enum messages {
    studentNotFind = 'Estudante não encontrado',
    studentNotSet = 'Estudante não cadastrado'
}

function getLastId():number{
    let item = students[students.length - 1];
    return item.id;
}
const app = express();
const route = Router();
app.use(express.json());
// Rota onde a minha API vai responder
route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Seja bem vindo a mach1' });
})

// Uma lista de estudantes
route.get('/studentList', (req: Request, res: Response) => {
    res.json(students);
})

// Retornar um estudante específico através do ID
route.get('/student/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let student:any = students.find(item => item.id == id);
    if (student){
        res.json(student);
    }else{
        res.json({message:messages.studentNotFind});
    }
})

route.post('/studentRegister', (req: Request, res: Response) => {
    let student = req.body;
    let lastID = getLastId() + 1;
    student.id = lastID;
    students.push(student);
    res.json({message:messages.studentNotSet});
})

// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(8080, () => 'server running port 8080');