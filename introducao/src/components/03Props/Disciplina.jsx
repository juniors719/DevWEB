//nome, codigo da disciplina, créditos e periodo
const Disciplina = ({nome, codigo, creditos, periodo}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Código: {codigo}</h3>
            <h3>Créditos: {creditos}</h3>
            <h3>Período: {periodo}</h3>
        </div>
    )
}

export default Disciplina;