const express = require("express");
const app = express()
const handlebars = require("express-handlebars")
const bodyParse = require("body-parser")
const Post = require('./models/post')



// config   
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

// body parser
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())


// Rotas

app.get('/', (req, res) => {
    Post.findAll().then((posts) => {
        console.log(posts)
        res.render('home', {posts: "posts"})
    })
    
})

app.get('/cad', (req, res) => {
    res.render("formulario")
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch(() => {
        res.send(`Houve um erro ${erro}`)
    })
})


app.listen(8081, () => {
    console.log("O servidor rodando na URL http://localhost:8081")
})