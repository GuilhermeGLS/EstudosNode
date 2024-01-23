const express = require("express");
const app = express()
const handlebars = require("express-handlebars")
const bodyParse = require("body-parser")

// chamdno o sequilize
const Sequelize = require('sequelize')

// config   
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

// Criando conexão com o banco de dados mySql
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});
// Rotas

app.get('/cad', (req, res) => {
    res.render("formulario")
})

app.post('/add', (req, res) => {
    res.send('formulario recebido')
})


app.listen(8081, () => {
    console.log("O servidor rodando na URL http://localhost:8081")
})