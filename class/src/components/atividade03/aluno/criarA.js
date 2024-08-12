import { useState } from "react";

import alunos from "../data/db_aluno";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/crud.css";

const CriarAluno = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIRA] = useState("");

    const handleSelect = (event) => {
        setCurso(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoId = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;
        alunos.push({ id: novoId, nome: nome, curso: curso, ira: ira });
    };

    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <div className="form-container">
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label htmlFor="nome" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            className="form-control"
                            id="nome"
                            onChange={(event) => setNome(event.target.value)}
                        ></input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="nome" className="form-label">
                            Curso
                        </label>
                        <select
                            value={curso}
                            className="form-select"
                            id="curso"
                            onChange={handleSelect}
                        >
                            <option value="CC">CC</option>
                            <option value="ES">ES</option>
                            <option value="SI">SI</option>
                            <option value="EC">EC</option>
                            <option value="DD">DD</option>
                            <option value="RC">RC</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <label htmlFor="ira" className="form-label">
                            IRA
                        </label>
                        <input
                            type="number"
                            name="ira"
                            className="form-control"
                            id="ira"
                            onChange={(event) => setIRA(event.target.value)}
                        ></input>
                    </div>
                    <div className="m-3">
                        <button className="btn btn-primary" type="submit">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CriarAluno;
