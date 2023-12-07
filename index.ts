import express from 'express';
const app =  express();

const porta = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Bem vindo explorador </h1><br><h2> Esse é o meu web service</h2>")
});

app.listen(porta, () => {
    console.log("web service rodando...")
});