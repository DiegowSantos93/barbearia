const franquia_controller = require("..controllers/franquia.js")

const model = (body, id = nextId++) => {
    if(body.nome != "" && body.nome != undefined && franquia_controller.show()){
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
        };
    };
};

module.exports = model