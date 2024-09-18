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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Criar Aluno</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="inputNome"
                    >
                        Nome
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        id="inputNome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div>
                    <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="inputCurso"
                    >
                        Curso
                    </label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                <div>
                    <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="inputIra"
                    >
                        IRA
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        id="inputIra"
                        value={ira}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Criar
                </button>
            </form>
        </div>
    );
};

export default Criar;
