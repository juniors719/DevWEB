const Produto = (name, category, price) => {

    // let objJSON = {nome:"Junior", idade:25, curso:"Ciencia da Computação", notas:{nota1:10, nota2:7}};

    return (
        <div>
            
            {/* <h1>{objJSON.notas.nota1}</h1> */}

            <h3>Nome: {name}</h3>
            <h3>Categoria: {category}</h3>
            <h3>Preço: {price}</h3>
        </div>
    )
}

export default Produto;