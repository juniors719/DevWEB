import { useState } from 'react'
const Estado = () => {

    // let contador = 0     // variável que armazena o estado do componente

    // função que incrementa o contador
    const incrementarContador = () => {
        // contador++
        // console.log(contador)
        setContador(contador => contador + 1) // setContador é uma função que atualiza o estado do componente
    }

    let [contador, setContador] = useState(0)
    // https://react.dev/reference/react/hooks#state-hooks

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar contador
            </button>
        </div>
    )
}

export default Estado