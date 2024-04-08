import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto 
                name="Máquina de Lavar" 
                category="Eletrodoméstico" 
                price={2300}
            />
            <hr />
            <Produto 
                name="Senhor dos Anéis - A sociedade do Anel" 
                category="Livro" 
                price={55} 
            />
            <hr />
            <Produto 
                name="Pizza de Calabresa" 
                category="Alimentação" 
                price={16.9} 
            />
        </div>
    )
}

export default Loja;