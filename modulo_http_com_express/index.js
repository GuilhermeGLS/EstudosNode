// devemos iniciar instalando o express com npm install express --save
// é um framework minimalista, e rápido no sentido de desenvolvimento 
// o express é um framework orientado a rotas

const express = require("express");
// Criando uma copia de todo o framework para toda a variavel app
const app = express();

// chamando uma rota
// o req é resposável por receber dados de uma função
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`)
});

app.get("/sobre", (req, res) => {
    res.sendFile(`${__dirname}/html/sobre.html`)
});

app.get("/blog", (req, res) => {
    res.send("Welcome to the blog")
});

// criando um parâmetro (Utiliza-se /: parametro)
app.get("/ola/:nome", (req, res) => {
    res.send("rota de nome")
});

app.get("/ola/:nome/:cargo", (req, res) => {
    res.send("rota de nome e cargo")
});

// com req no send ele retorna um Json enviando os dados da requisição para os parâmetros
app.get("/req/:nome/:cargo", (req, res) => {
    res.send(req.params)
});

// dessa forma ele retorna o dado do parâmetro escolhido nesse caso o nome 
app.get("/req/:nome/:cargo/:cor", (req, res) => {
    // só pode enviar o send 1 vez
    // e podemos tbm usar HTML
    res.send(`<h1> Oi ${req.params.nome} </h1>  <h2> Seu cargo e ${req.params.cargo} </h2> <h3> e sua cor e ${req.params.cor} </h3>`)
});





app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000")
})
// localhost:3000