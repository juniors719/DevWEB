import { useState } from "react"

const SaveLoadData = () => {

    const aluno = {
        nome:"Fulano",
        curso:"CC",
        IRA : 7.5
    }

    // Variável de estado para armazenar os dados do aluno
    // Inicializado com um objeto vazio
    const [alunoStorage, setAlunoStorage] = useState()

    /**
     * localStorage e sessionStorage são objetos globais do JavaScript, e são usados para armazenar dados no navegador do usuário
     * 
     * localStorage - armazena os dados de forma permanente, mesmo após o navegador ser fechado
     * sessionStorage - armazena os dados de forma temporária, e os dados são apagados após o navegador ser fechado
     * 
     * Ambos objetos possuem os métodos:
     * 
     * setItem("nome", "Fulano") - armazena o valor "Fulano" na chave "nome"
     * getItem("nome") - retorna o valor armazenado na chave "nome"
     * 
     * localStorage precisa ser limpo manualmente, enquanto sessionStorage é limpo automaticamente
     */
    function saveData(){
        // localStorage.setItem("aluno", JSON.stringify(aluno))
        sessionStorage.setItem("aluno", JSON.stringify(aluno))
        alert("Dado salvo com sucesso")
    }

    function loadData(){
        // const alunoCarregado = localStorage.getItem("aluno")
        const alunoCarregado = sessionStorage.getItem("aluno")
        setAlunoStorage(JSON.parse(alunoCarregado))
    }

    return (
        <div>
            <h1>Save Load Data</h1>
            <h3>
                {
                    JSON.stringify(alunoStorage)
                }
            </h3>
            <button onClick={saveData}>
                SAVE DATA
            </button>
            <button onClick={loadData}>
                LOAD DATA
            </button>
        </div>
    )
}

export default SaveLoadData