//Importanod o NoteService
const NoteService = require('../services/NoteService')

module.exports = {
    ping: (req, res) => {
        res.json({pong:true})
    },
    all: async (req, res) => {
        let json = { error:'', result:[] }

        let notes = await NoteService.getAll();

        //Para cada obj(i) em notes preenche o array result
        for(let i in notes) {
            json.result.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }


        res.json(json)

    },
    one: (req, res) => {

    },
    new: (req, res) => {

    },
    edit: (req, res) => {

    },
    delete: (req, res) => {
        
    }

}