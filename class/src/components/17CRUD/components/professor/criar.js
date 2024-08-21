import { useState } from "react";

import professores from "../../data/db_professor";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../css/crud.css";
import axios from "axios";

const Criar = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulacao, setTitulacao] = useState("");
    const [ai, setAi] = useState({ es: false, lc: false, mc: false });
    const [universidade, setUniversidade] = useState({
        ufc: false,
        ifce: false,
    });

    const postProfessorAxiosThenCatch = (professor) => {
        axios
            .post("http://localhost:3001/professores", professor)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    const postProfessorFetchThenCatch = (professor) => {
        fetch("http://localhost:3001/professores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(professor),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const handleUniversidade = (event) => {
        const reset = { ufc: false, ifce: false };
        setUniversidade({
            // ufc: event.target.value === "ufc",
            // ifce: event.target.value === "ifce",
            ...reset,
            [event.target.value]: true,
        });
    };

    const handleInputNome = (event) => {
        setNome(event.target.value);
    };

    const handleInputCurso = (event) => {
        setCurso(event.target.value);
    };

    const handleCheckbox = (event) => {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoProfessor = { nome, curso, titulacao, ai, universidade };
        postProfessorAxiosThenCatch(novoProfessor);
    };

    const handleSelect = (event) => {
        setTitulacao(event.target.value);
    };

    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
            <h4>{JSON.stringify(universidade)}</h4>
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
                            onChange={handleInputNome}
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="curso" className="form-label">
                            Curso
                        </label>
                        <input
                            type="text"
                            name="curso"
                            className="form-control"
                            id="curso"
                            onChange={handleInputCurso}
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="titulacao" className="form-label">
                            Titulação
                        </label>
                        <select
                            value={titulacao}
                            className="form-select"
                            id="selectTitulacao"
                            onChange={handleSelect}
                        >
                            <option value="Doutorado">Doutorado</option>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Graduação">Graduação</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <fieldset>
                            <legend>Área de Interesse</legend>
                            <div className="form-check">
                                <input
                                    id="idEs"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={ai.es}
                                    onChange={handleCheckbox}
                                    name="es"
                                />
                                <label
                                    htmlFor="idEs"
                                    className="form-check-label"
                                >
                                    Engenharia de Software
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="idLc"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={ai.lc}
                                    onChange={handleCheckbox}
                                    name="lc"
                                />
                                <label
                                    htmlFor="idLc"
                                    className="form-check-label"
                                >
                                    Lógica para Computação
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="idMc"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={ai.mc}
                                    onChange={handleCheckbox}
                                    name="mc"
                                />
                                <label
                                    htmlFor="idMc"
                                    className="form-check-label"
                                >
                                    Matemática Computacional
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="m-3">
                        <fieldset>
                            <legend>Universidade de Origem</legend>
                            <div className="form-check">
                                <input
                                    id="idUFC"
                                    type="radio"
                                    className="form-check-input"
                                    name="universidade"
                                    checked={universidade.ufc}
                                    onChange={handleUniversidade}
                                    value="ufc"
                                />
                                <label
                                    htmlFor="idUFC"
                                    className="form-check-label"
                                >
                                    UFC
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="idIFCE"
                                    type="radio"
                                    className="form-check-input"
                                    name="universidade"
                                    checked={universidade.ifce}
                                    onChange={handleUniversidade}
                                    value="ifce"
                                />
                                <label
                                    htmlFor="idIFCE"
                                    className="form-check-label"
                                >
                                    IFCE
                                </label>
                            </div>
                        </fieldset>
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
