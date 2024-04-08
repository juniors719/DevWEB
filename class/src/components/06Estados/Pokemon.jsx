import { useState } from "react"

const Pokemon = () => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)
    function decrementarContador() {
        if (contador - 1 > 0) {
            setContador(contador => contador - 1)
        }
    }
    return (
        <div>
            <h3>ID: {contador}</h3>
            <img
                src={url + contador + ".png"}
                alt="Pokemon" 
                width={200}
            /><br />
            <button
                onClick={() => setContador(contador + 1)}
            >
                Incrementar Pokemon
            </button>
            <button
                onClick={() => decrementarContador()}
            >
                Decrementar Pokemon
            </button>
            
        </div>
    )
}
export default Pokemon