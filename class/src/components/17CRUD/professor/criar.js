import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/crud.css";

const Criar = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulacao, setTitulacao] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            "Nome: " + nome + "\nCurso: " + curso + "\nTitulação: " + titulacao
        );
    };

    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
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
                        />
                    </div>
                    d
                    <div className="m-3">
                        <label htmlFor="curso" className="form-label">
                            Curso
                        </label>
                        <input
                            type="text"
                            name="curso"
                            className="form-control"
                            id="curso"
                            onChange={(event) => setCurso(event.target.value)}
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="titulacao" className="form-label">
                            Titulação
                        </label>
                        <select
                            value={titulacao}
                            className="form-select"
                            id="titulacao"
                            onChange={(event) =>
                                setTitulacao(event.target.value)
                            }
                        >
                            <option value="DOUTORADO">Doutorado</option>
                            <option value="MESTRADO">Mestrado</option>
                            <option value="GRADUACAO">Graduação</option>
                        </select>
                    </div>
                    <div className="div-button-submit">
                        <button className="btn btn-primary" type="submit">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Criar;
