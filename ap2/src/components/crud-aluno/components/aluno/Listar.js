import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listar = () => {
    const [alunos, setAlunos] = useState([]);
    const navigate = useNavigate();
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.listar(firebase.getFirestoreDB(), (alunos) =>
            setAlunos(alunos)
        );
    }, [firebase]);

    const handleDelete = (id) => {
        if (window.confirm(`Deseja excluir id = ${id}`)) {
            AlunoFirebaseService.deletar(
                firebase.getFirestoreDB(),
                (response) => {
                    const result = alunos.filter((aluno) => aluno.id !== id);
                    setAlunos(result);
                },
                id
            );
            navigate("/aluno/listar");
        }
    };

    const renderizarAlunos = () => {
        const vetorResultado = alunos.map((aluno) => {
            return (
                <tr>
                    <th scope="row">{aluno.id}</th>
                    <td id="nome-column">{aluno.nome}</td>
                    <td id="curso-column">{aluno.curso}</td>
                    <td id="ira-column">{aluno.ira}</td>
                    <td id="actions-column">
                        <div className="button-content">
                            <Link
                                to={`/aluno/editar/${aluno.id}`}
                                className="btn btn-primary crudaluno-form-edit-button"
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => handleDelete(aluno.id)}
                                className="btn btn-danger crudaluno-form-edit-button"
                            >
                                Excluir
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });
        return vetorResultado;
    };

    return (
        <div className="crudaluno-container">
            <h1>Listar Alunos</h1>
            <div className="table-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">IRA</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{renderizarAlunos()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default Listar;
