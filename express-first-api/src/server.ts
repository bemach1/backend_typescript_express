import express from 'express';
import { Router, Request, Response } from 'express';
import {IStudent} from './interfaces/student';
import { IStudents } from './interfaces/interfaces';
import getLastId from './utils/getLastID';
import messages from './enums/messages'

const fs = require('fs');
const data  = require ('../database/students.json');
const students: IStudents[] = data;
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
    let student: any = students.find(item => item.id == id);
    if (student) {
        res.json(student);
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
        fs.writeFileSync("./database/students.json", studentJson);
        res.json({ message: messages.studentRegistrerSuccess });

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
    // let student = req.body;
    // let lastID = getLastId(students) + 1;
    // student.id = lastID;
    // students.push(student);
    // res.json({ message: messages.studentRegistrerSuccess });
    // fs.writeFileSync("./database/students.json", JSON.stringify(students));
  
})

// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(3000, () => 'server running port 8080');