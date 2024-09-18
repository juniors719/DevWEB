import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Criar = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState(0);

    const navigate = useNavigate();

    const firebase = useContext(FirebaseContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoAluno = { nome, curso, ira };
        AlunoFirebaseService.criar(
            firebase.getFirestoreDB(),
            novoAluno,
            (alunoSimples) => {
                console.log(alunoSimples);
            }
        );
        navigate("/aluno/listar");
    };
    return (
        <div className="crudaluno-container crudaluno-form">
            <h1>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputNome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">
                        Curso
                    </label>
                    <select
                        className="form-control"
                        id="inputCurso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <option value="">Selecione um curso</option>
                        <option value="Ciência da Computação">
                            Ciência da Computação
                        </option>
                        <option value="Engenharia de Software">
                            Engenharia de Software
                        </option>
                        <option value="Engenharia da Computação">
                            Engenharia da Computação
                        </option>
                        <option value="Sistemas de Informação">
                            Sistemas de Informação
                        </option>
                        <option value="Redes de Computadores">
                            Redes de Computadores
                        </option>
                        <option value="Design Digital">Design Digital</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIra">
                        IRA
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputIra"
                        value={ira}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100 crudaluno-form-button"
                >
                    Criar
                </button>
            </form>
        </div>
    );
};

export default Criar;
