const express = require("express");
const app = express()
const handlebars = require("express-handlebars")

// chamdno o sequilize
const Sequelize = require('sequelize')

// config   
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

// Criando conexão com o banco de dados mySql
const sequelize = new Sequelize('test', 'root', 'Guim@$1806', {
    host: "localhost",
    dialect: 'mysql'
});
// Rotas

app.get('/cad', (req, res) => {
    res.send("Rota de Cadastro de Posts")
})


app.listen(8081, () => {
    console.log("O servidor rodando na URL http://localhost:8081")
})