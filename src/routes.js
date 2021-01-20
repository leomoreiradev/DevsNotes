const express = require('express')
//Impotando o router do express
const router = express.Router()

//Impotando o controller
const NoteController = require('./controllers/NoteController')

//Criando rotas

//Para verificar se a api está respondendo
router.get('/ping', NoteController.ping)

//Pega todas as notas (id, titulo)
router.get('/notes', NoteController.all);

//Pegar informações de uma nota
router.get('/note/:id', NoteController.one)

//Adiciona uma nota
router.post('/note', NoteController.new)

//Altera uma nota
router.put('/note/:id', NoteController.edit)

//Deleta uma nota
router.delete('/note/:id', NoteController.delete)

module.exports = router