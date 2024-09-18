import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Editar = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.getById(
            firebase.getFirestoreDB(),
            (aluno) => {
                const { nome, curso, ira } = aluno;
                setNome(nome);
                setCurso(curso);
                setIra(ira);
            },
            id
        );
    }, [firebase, id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const aluno = { nome, curso, ira };
        AlunoFirebaseService.atualizar(
            firebase.getFirestoreDB(),
            id,
            aluno,
            (response) => {
                navigate("/aluno/listar");
            },
            id
        );
    };

    return (
        <div className="crudaluno-container">
            <h1>Editar Aluno</h1>
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
                        name="nome"
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
                        name="ira"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100 crudaluno-form-button"
                >
                    Atualizar
                </button>
            </form>
        </div>
    );
};

export default Editar;
