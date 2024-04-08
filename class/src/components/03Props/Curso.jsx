//imprima o nome do curso e pelo menos 3 disciplinas
import Disciplina from "./Disciplina"

const Curso = ({nome}) => {
    return (
        <div>
            <h1>Curso: {nome}</h1>
            <h3>Disciplinas:</h3>
            <h4>
                <Disciplina 
                    nome="Probabilidade e Estatística" 
                    codigo="QXD-0002"
                    creditos={8}
                    periodo={3}
                />
            </h4>
            <h4>
                <Disciplina 
                    nome="Fundamentos de Bancos de Dados" 
                    codigo="QXD-0053"
                    creditos={8}
                    periodo={3}
                />
            </h4>
        </div>
    )
}

export default Curso;