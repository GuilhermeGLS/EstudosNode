const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/teste", {
  useNewUrlParser: true,
}).then(() => {
  console.log('conectado');
}).catch((err) => {
  console.log('deu erro' + err);
});

const Schema = mongoose.Schema; // Add this line to define the Schema object

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  }
});

const Usuario = mongoose.model('usuarios', UsuarioSchema); // Create a model using the schema

new Usuario({
  nome: "Guilherme",
  sobrenome: "Lima", // Corrected "Sobrenome" to "sobrenome"
  email: "Exemplo@gmail.com",
  idade: 18
}).save().then(() => {
  console.log("usuario criado com sucesso");
}).catch((err) => {
  console.log("Houve erro ao criar o usuario" + err);
});