const ComFilho = ({message, enviarMensagemParaOPai}) => {
    return (
        // <> </> é um fragment, que serve para agrupar elementos sem precisar de uma div
        <> 
            <h2>Mensagem do pai: {message}</h2>
            <button
                onClick={() => enviarMensagemParaOPai("Oi pai, tudo bom?")}
            >
                Enviar mensagem para o pai!
            </button>
        </>
    )
}

export default ComFilho