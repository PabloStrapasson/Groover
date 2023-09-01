const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const host = 'localhost';
const porta = 3000;

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/home.js'));
})

app.use('/', router);
app.listen(porta, () => {console.log('Rodando na porta '+ porta)});


// Versão 1 do servidor
/*const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.end("Servidor rodando!");
}, app);

server.listen(porta, host, () => {
    console.log('Servidor rodando na porta: ' + porta)
})*/