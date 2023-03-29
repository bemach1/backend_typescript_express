import express from 'express';
import { Router, Request, Response } from 'express';
import { IStudent } from './interfaces/student';
import getLastId from './utils/getLastId';
import messages from './enums/messages'
import findUser from './utils/findUser';

const fs = require('fs');
const data = require('../database/students.json');
const students: IStudent[] = data;
const app = express();
const route = Router();

function handleBodyRegister(returnAPI: any, idStudent: number): IStudent {
    const newStudent = {
        id: idStudent,
        name: returnAPI.name,
        age: returnAPI.age,
        cpf: returnAPI.cpf,
    }
    return newStudent;
}

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
    let student=  findUser(students, id)
    if (student) {
        res.json(students);
    } else {
        res.json({ message: messages.studentNotFind });
    }
})

route.post('/studentRegister', (req: Request, res: Response) => {
    // Como valido o Body enviado?
    if (req.body.name && req.body.age && req.body.cpf) {
        let lastID = getLastId(students);
        let student = handleBodyRegister(req.body, lastID);
        students.push(student);
        const studentJson = JSON.stringify(students);
        res.json({ message: messages.studentRegistrerSuccess });
        fs.writeFileSync("./database/students.json", studentJson);

    } else {
        res.json({
            message: messages.studentNotSet,
            bodyExpected: {
                name: 'string',
                age: 'number',
                cpf: 'string'
            }
        });
    }
})

// Criando uma rota PUT para atualizar um registro no banco
route.put('/studentUpdate/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    // Verificar se passou um ID na Rota
    let resultStudent = students.find(item => item.id === id);
    let indexObject = students.findIndex(item => item.id === id);

    if (resultStudent) {
        // Validar dados que foram enviados no body
        if (req.body.name || req.body.age || req.body.cpf) {
            // ATUALIZANDO O OBJETO
            // Name
            students[indexObject].name = req.body.name ? req.body.name :
                students[indexObject].name;

            // Age
            students[indexObject].age = req.body.age ? req.body.age :
                students[indexObject].age;

            // CPF
            students[indexObject].cpf = req.body.cpf ? req.body.cpf :
                students[indexObject].cpf;
            const studentJson = JSON.stringify(students);
            res.json({
                message: messages.studentRegistrerSuccess
            });
            fs.writeFileSync("./database/students.json", studentJson);
        } else {
            res.json({
                message: messages.studentNotSet,
                bodyExpected: {
                    name: 'string',
                    age: 'number',
                    cpf: 'string'
                }
            });
        }
    } else {
        res.json({
            message: messages.studentNotSet,
            bodyExpected: {
                name: 'string',
                age: 'number',
                cpf: 'string'
            }
        });
    }
});

// DELETE remover estudante
route.delete('/studentDelete/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    // Verifico se passou um ID que realmente existe no JSON
    let verifyID = students.find(item => item.id === id);
    if (verifyID){
        // Filtra para gerar um novo array sem o registro setado
        let studentObject = students.filter(item => item.id !== id);

        const studentJson = JSON.stringify(studentObject);
        res.json({
            message: messages.studentRegisterRemove
        });
        fs.writeFileSync("./database/students.json", studentJson);
    } else{
        res.json({
            message: messages.studentNotFind
        });
    }


})

// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(3000, () => 'server running port 8080');