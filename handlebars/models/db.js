// chamando o sequilize
const Sequelize = require('sequelize')

// Criando conexão com o banco de dados mySql
const sequelize = new Sequelize('postapp', 'root', 'Guim@$1806', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}