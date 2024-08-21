const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
];

const Questao01A = () => {
    return (
        <>
            <h3>Questão 01</h3>
            <Questao01B lista={lista} />
        </>
    );
};

function Questao01B() {
    // Função que recebe um objeto JSON e retorna o maior número
    const maiorNumeroDoObjetoJSON = (objetoJSON) => {
        const valores = Object.values(objetoJSON);
        return Math.max(...valores);
    };

    // Função que recebe uma lista de objetos JSON e retorna uma lista com os maiores números de cada objeto
    const calcularObjetoJSON = (lista) => {
        // Mapeia a lista de objetos JSON e retorna uma lista com os maiores números de cada objeto
        const resultado = lista.map((objetoJSON) => {
            return maiorNumeroDoObjetoJSON(objetoJSON);
        });

        return resultado;
    };

    // Função que renderiza o resultado
    const renderizarResultado = (resultado) => {
        return resultado.map((valor, index) => {
            return (
                <li key={index}>
                    <strong>Maior no índice {index}:</strong> {valor}
                </li>
            );
        });
    };

    return (
        <>
            <h4>Resultado:</h4>
            <pre>{renderizarResultado(calcularObjetoJSON(lista))}</pre>
        </>
    );
}

export default Questao01A;
