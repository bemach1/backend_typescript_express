import express, { Request, Response } from 'express';

const app = express();

// Buscar Dados
app.get('/api/livros', (req: Request, res: Response) => {
    res.send('Busca todos os livros');
});

app.get('/api/livros/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;
    res.send('Busca todos os livros');
});

// Criar Registros
app.post('/api/livros/cadastro', (req: Request, res: Response) => {
    res.send('Cria livros');
});

// Atualizar Registros
app.put('/api/livros/update/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;

    res.send('Atualiza livro');
});

// Remove Registro
app.delete('/api/livros/delete/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;

    res.send('Remove livro');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
