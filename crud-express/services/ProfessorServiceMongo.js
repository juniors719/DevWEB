var ProfessorModelMongo = require("../models/ProfessorModelMongo");

class ProfessorServiceMongo {
    static criar(req, res) {
        ProfessorModelMongo.create(req.body)
            .then((professor) => {
                res.json(professor);
            })
            .catch((error) => console.error(error));
    }

    static listar(req, res) {
        return ProfessorModelMongo.find()
            .then((professores) => {
                res.json(professores);
            })
            .catch((error) => console.error(error));
    }

    static delete(req, res) {
        ProfessorModelMongo.findByIdAndDelete(req.params.id)
            .then((professor) => {
                res.json(professor);
            })
            .catch((error) => console.error(error));
    }

    static recuperar(req, res) {
        ProfessorModelMongo.findById(req.params.id)
            .then((professor) => {
                res.json(professor);
            })
            .catch((error) => console.error(error));
    }

    static atualizar(req, res) {
        ProfessorModelMongo.findByIdAndUpdate(req.params.id, req.body)
            .then((professor) => {
                res.json(professor);
            })
            .catch((error) => console.error(error));
    }
}

module.exports = ProfessorServiceMongo;
