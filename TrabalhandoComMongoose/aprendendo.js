// como se conectar ao banco de dados mongo
const mongoose = require('mongoose');



// Config mongoose
mongoose.Promise = global.Promise;
main().catch(err => console.log(err));

// a conexão é passado através de uma especie de URL (É POSSÍVEL CRIAR O BANCO DAQUI MESMO) o /aprendendo foi criado agora no visual
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Deu certo")
}