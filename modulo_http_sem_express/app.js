
// Este modulo é resposável por trabalhar com arquivos do sistema operacional
// let fs = require(fs)

// modulo padrão do node que permite cria aplicações web
let http = require('http')

// criando um servidor / listen significa qual porta de rede voce quer abrir seu servidor
// createServer recebe uma função onde é passada 2 parametros req = requisição, res = resposta   
http.createServer(function(req, res){
    // end envia mensagem
    res.end("Hello World")
}).listen(3000);

console.log("Servidor Rodando!");


