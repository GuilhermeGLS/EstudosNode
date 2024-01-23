const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Guim@$1806', {
    host: "localhost",
    dialect: 'mysql'
});


// Validar se deu certo conectar com o banco de dados
sequelize.authenticate().then(function() {
    console.log('deu certo')
}).catch(function(erro) {
    console.log('error:'+erro)
})


// Models

// Modelo de Postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({
//     force: true
// })

// Models
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({
//     force: true
// })


// INSERINDO INFORMAÇÕES
/* Postagem.create({
     titulo: "Um titulo qualquer",
     conteudo: "Conteudo qualquer"
 })
 */


// INSERINDO INFORMAÇÕES EM USUARIO
Usuario.create({
    nome: "Guilherme",
    sobrenome: "Lima",
    idade: 18,
    email: "exemploguimas@gmail.com"
})