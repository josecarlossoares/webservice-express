import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app =  express();
const porta = 3000;

let usuarios: any[] = [{userId: 1, userName: "admin"}, {userId: 2, userName: "name test"}];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("<h1> Bem vindo explorador </h1><br><h2> Esse é o meu web service</h2>")
});

app.get('/users', (req, res) => {
    try{
        res.send(usuarios)
    }catch(err){
        res.send('erro: ' + err );
    }
})

app.post("cadastrarUser", (req, res)=> {
    try{
        let nome = req.body.userName;
        let novoUsuario = {userId: usuarios.length + 1, userName: nome};
        usuarios.push(novoUsuario);

        res.status(201).json({resultado: `Cadastro realizado,  bem vindo ${novoUsuario}`});
    
    }catch(err){
        res.send(err);
    }
    
})

app.put('/editarUser:/id', (req, res) => {
    try{
        let usuarioId = parseInt(req.body.id);
        let novoNome = req.body.userName;
        
        for (const usuario of usuarios) {
            if(usuario.id  == usuarioId){
                usuario.userName = novoNome;
                res.status(201).json({resultado:`Usuário alterado, nome: ${usuario.userName}`});
            }
        }
    }catch(err){
        res.status(404).json({resultado: "Usuário não encontrado."});
    }

});

app.listen(porta, () => {
    console.log("web service rodando...")
});