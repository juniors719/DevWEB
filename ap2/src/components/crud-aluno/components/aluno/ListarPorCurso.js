import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";
import { useEffect, useState, useContext } from "react";

const ListarPorCurso = () => {
    const [alunos, setAlunos] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.listar(firebase.getFirestoreDB(), (alunos) =>
            setAlunos(alunos)
        );
    }, [firebase]);

    // Função para agrupar alunos por curso
    const agruparAlunosPorCurso = () => {
        const cursosAgrupados = {};

        alunos.forEach((aluno) => {
            if (!cursosAgrupados[aluno.curso]) {
                cursosAgrupados[aluno.curso] = [];
            }
            cursosAgrupados[aluno.curso].push(aluno);
        });

        return cursosAgrupados;
    };

    const renderizarCursos = () => {
        const cursosAgrupados = agruparAlunosPorCurso();

        return Object.keys(cursosAgrupados).map((curso) => (
            <div key={curso} className="mb-8 min-w-full">
                <h2 className="text-xl font-semibold mb-4">{curso}</h2>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left w-1/2">
                                Nome
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left w-1/2">
                                IRA
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursosAgrupados[curso].map((aluno) => (
                            <tr
                                key={aluno.id}
                                className={aluno.ira >= 7 ? "bg-green-100" : ""}
                            >
                                <td className="border border-gray-300 px-4 py-2 w-1/2">
                                    {aluno.nome}
                                </td>
                                <td
                                    className={`border border-gray-300 px-4 py-2 w-1/2`}
                                >
                                    {aluno.ira}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Listar Alunos por Curso</h1>
            {renderizarCursos()}
        </div>
    );
};

export default ListarPorCurso;
