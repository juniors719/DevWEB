/* const ImprimeDados = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Matrícula: {props.curso}</h1>
            <h1>Universidade: {props.univ}</h1>
        </div>
    );
} */

const ImprimeDados = ({nome, mat, curso, univ}) => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Matrícula: {mat}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {univ}</h1>
        </div>
    );
}

export default ImprimeDados;