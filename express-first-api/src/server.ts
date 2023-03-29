import express from 'express';
import { Router, Request, Response } from 'express';
import { IStudent } from './interfaces/student';
import getLastId from './utils/utilgetLastid';
import messages from './enums/messages'
import saveDataInJson from './utils/saveDataInJson';

const data = require("../database/students.json");
const students: IStudent[] = data;
const app = express();
const route = Router();

function handleBodyRegister(returnAPI: any, idStudent: number): IStudent {
  const newStudent = {
    id: idStudent,
    name: returnAPI.name,
    age: returnAPI.age,
    cpf: returnAPI.cpf,
  };
  return newStudent;
}

function verifyBody(body: any): { isValid: boolean; message: string } {
  if (!body) {
    return { isValid: false, message: "Corpo inválido" };
  }

  if (!body.name || typeof body.name !== "string") {
    return {
      isValid: false,
      message: "Campo nome é obrigatório e deve receber uma string",
    };
  }

  if (!body.age || typeof body.age !== "number") {
    return {
      isValid: false,
      message: "Campo idade é obrigatório e deve receber um número",
    };
  }

  if (!body.cpf || (typeof body.cpf !== "string" || body.cpf.length !== 11)) {
    return {
      isValid: false,
      message:
        "Campo cpf é obrigatório, deve receber uma string e conter exatamente 11 números",
    };
  }

  return { isValid: true, message: "" };
}

app.use(express.json());
// Rota onde a minha API vai responder
route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Seja bem vindo a mach1" });
});

// Uma lista de estudantes
route.get("/studentList", (req: Request, res: Response) => {
  res.json(students);
});

// Retornar um estudante específico através do ID
route.get("/student/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  let student: any = students.find((item) => item.id == id);
  if (student) {
    res.json(student);
  } else {
    res.json({ message: messages.studentNotFind });
  }
});

<<<<<<< HEAD
route.post('/studentRegister', (req: Request, res: Response) => {
    // Como valido o Body enviado?
    if (req.body.name && req.body.age && req.body.cpf) {
        let lastID = getLastId(students);
        let student = handleBodyRegister(req.body, lastID);
        students.push(student);
        res.json({ message: messages.studentRegistrerSuccess });
        saveDataInJson(students)
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
=======
route.post("/studentRegister", (req: Request, res: Response) => {
  const body = req.body;
  const validBody = verifyBody(body);
  // Como valido o Body enviado?
  if (validBody) {
    let lastID = getLastId(students);
    let student = handleBodyRegister(body, lastID);
    students.push(student);
    const studentJson = JSON.stringify(students);
    res.json({ message: messages.studentRegistrerSuccess });
    fs.writeFileSync("./database/students.json", studentJson);
  }
  //   else {
  //     res.json({
  //       message: messages.studentNotSet,
  //       bodyExpected: {
  //         name: "string",
  //         age: "number",
  //         cpf: "string",
  //       },
  //     });
  //   }
});
>>>>>>> 2bcaa6f (Função para validar campos passados no corpo da API)

// Criando uma rota PUT para atualizar um registro no banco
route.put("/studentUpdate/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  // Verificar se passou um ID na Rota
  let resultStudent = students.find((item) => item.id === id);
  let indexObject = students.findIndex((item) => item.id === id);

  if (resultStudent) {
    // Validar dados que foram enviados no body
    if (req.body.name || req.body.age || req.body.cpf) {
      // ATUALIZANDO O OBJETO
      // Name
      students[indexObject].name = req.body.name
        ? req.body.name
        : students[indexObject].name;

      // Age
      students[indexObject].age = req.body.age
        ? req.body.age
        : students[indexObject].age;

<<<<<<< HEAD
            // CPF
            students[indexObject].cpf = req.body.cpf ? req.body.cpf :
                students[indexObject].cpf;
 
            res.json({
                message: messages.studentRegistrerSuccess
            });

            saveDataInJson(students)         
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
=======
      // CPF
      students[indexObject].cpf = req.body.cpf
        ? req.body.cpf
        : students[indexObject].cpf;
      const studentJson = JSON.stringify(students);
      res.json({
        message: messages.studentRegistrerSuccess,
      });
      fs.writeFileSync("./database/students.json", studentJson);
>>>>>>> 2bcaa6f (Função para validar campos passados no corpo da API)
    } else {
      res.json({
        message: messages.studentNotSet,
        bodyExpected: {
          name: "string",
          age: "number",
          cpf: "string",
        },
      });
    }
  } else {
    res.json({
      message: messages.studentNotSet,
      bodyExpected: {
        name: "string",
        age: "number",
        cpf: "string",
      },
    });
  }
});

// DELETE remover estudante
route.delete("/studentDelete/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  // Verifico se passou um ID que realmente existe no JSON
  let verifyID = students.find((item) => item.id === id);
  if (verifyID) {
    // Filtra para gerar um novo array sem o registro setado
    let studentObject = students.filter((item) => item.id !== id);

<<<<<<< HEAD
        res.json({
            message: messages.studentRegisterRemove
        });
      
        saveDataInJson(studentObject)
    } else{
        res.json({
            message: messages.studentNotFind
        });
    }


})
=======
    const studentJson = JSON.stringify(studentObject);
    res.json({
      message: messages.studentRegisterRemove,
    });
    fs.writeFileSync("./database/students.json", studentJson);
  } else {
    res.json({
      message: messages.studentNotFind,
    });
  }
});
>>>>>>> 2bcaa6f (Função para validar campos passados no corpo da API)

// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(3000, () => "server running port 8080");
