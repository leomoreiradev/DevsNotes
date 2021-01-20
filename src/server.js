//Importando libs necessárias
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importando as rotas
const routes = require('./routes')

const server = express();
//Para poder acessar a api na internet
server.use(cors());
//Para poder obter os dados pelas requisições
server.use(bodyParser.urlencoded({ extended: false}))

//Para poder usar as rotas e o /api é o prefixo
server.use('/api/',routes);

//Definindo porta do servidor
server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})
