import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/CrudAluno.css";

const Listar = () => {
    const [alunos, setAlunos] = useState([]);
    const [grifa, setGrifa] = useState(false);
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
        let somaIra = 0;

        const vetorResultado = alunos.map((aluno) => {
            somaIra += parseFloat(aluno.ira);

            const iraAluno = parseFloat(aluno.ira);
            const rowClass = grifa
                ? iraAluno >= 7
                    ? "bg-blue-400 text-white"
                    : "bg-red-400 text-white"
                : "";

            return (
                <tr key={aluno.id} className={rowClass}>
                    <th scope="row" className="px-4 py-2 border">
                        {aluno.id}
                    </th>
                    <td id="nome-column" className="px-4 py-2 border">
                        {aluno.nome}
                    </td>
                    <td id="curso-column" className="px-4 py-2 border">
                        {aluno.curso}
                    </td>
                    <td id="ira-column" className="px-4 py-2 border">
                        {aluno.ira}
                    </td>
                    <td id="actions-column" className="px-4 py-2 border">
                        <div className="flex space-x-2">
                            <Link
                                to={`/aluno/editar/${aluno.id}`}
                                className="bg-green-700 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => handleDelete(aluno.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Excluir
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });

        const mediaIra = somaIra / alunos.length;

        vetorResultado.push(
            <tr key="media">
                <td
                    colSpan="3"
                    className="px-4 py-2 font-bold text-right border"
                >
                    Média IRA:
                </td>
                <td colSpan="2" className="px-4 py-2 font-bold border">
                    {mediaIra.toFixed(2)}
                </td>
            </tr>
        );
        return vetorResultado;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Listar Alunos</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="px-4 py-2 border bg-gray-100"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-2 border bg-gray-100"
                            >
                                Nome
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-2 border bg-gray-100"
                            >
                                Curso
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-2 border bg-gray-100"
                            >
                                IRA
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-2 border bg-gray-100"
                            >
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderizarAlunos()}</tbody>
                </table>
                <div className="mt-4">
                    <button
                        onClick={() => setGrifa(!grifa)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Grifar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Listar;
