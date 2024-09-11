const ProfessorModel = require("../models/ProfessorModel");
const professores = require("../data/data");

let id = 4;

class ProfessorService {
    static listar() {
        return professores;
    }
    static criar(data) {
        const novoProfessor = new ProfessorModel(
            ++id,
            data.nome,
            data.curso,
            data.titulacao,
            data.universidade
        );
        professores.push(novoProfessor);
        return novoProfessor;
    }

    static recuperar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i];
            }
        }
        return null;
    }

    static atualizar(id, data) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores[i].nome = data.nome;
                professores[i].curso = data.curso;
                professores[i].titulacao = data.titulacao;
                professores[i].universidade = data.universidade;
                professores[i].ai = data.ai;
                return professores[i];
            }
        }
        return null;
    }
}

module.exports = ProfessorService;
