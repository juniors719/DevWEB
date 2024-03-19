const PlacaMae = ({nome, preco}) => {
    return (
        <>
            <h2>Placa Mãe</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <>
            <h2>Memória</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <>
            <h2>Placa de Vídeo</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}

