import express from 'express';
import { Router, Request, Response } from 'express';

// Estou instanciando as funcionalidades express 
const app = express();
const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    let nome = req.query.nome;
    let idade = Number(req.query.idade);
    if (idade >= 18) {
        res.json({
            message: nome + ' é maior de idade.',
            maioridade: true
        })
    } else {
        res.json({
            message: nome + ' é menor de idade.',
            maioridade: false
        })
    }
});

route.get('/banana', (req: Request, res: Response) => {
    res.json([{
        type: 'Nanica',
        description: 'Banana grande e muito boa pra comer'
    },{
        type: 'Prata',
        description: 'Banana pequena e muito boa pra comer'
    },{
        type: 'Terra',
        description: 'Muito boa pra cozinhar'
    }])
});
app.use(route);

app.listen(8080, () => 'Server Running ')


/* Explicando rotas  */
// Url base
// https://localhost:8080

// Rota
//https://localhost:8080/productList
//https://localhost:8080/productDetail
