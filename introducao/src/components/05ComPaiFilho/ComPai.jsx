import ComFilho from "./ComFilho"
const ComPai = () => {

    function receberMensagemDoFilho(mensagem){
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        // <> </> é um fragment, que serve para agrupar elementos sem precisar de uma div
        <> 
            <ComFilho message="Oi, filho." enviarMensagemParaOPai={receberMensagemDoFilho} />
            {/* Não usar (), pois invoca a função. */}
        </>
    )
}

export default ComPai