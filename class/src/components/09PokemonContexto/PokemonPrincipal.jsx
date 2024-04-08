import PokemonImagem from "./PokemonImagem";
import { PokemonContext } from "./PokemonContext";
import { useState } from "react";

const PokemonPrincipal = () => {

    // const id = 100;
    const [id, setId] = useState(100);

    return (
        <div>
            <h3>Pokemon!</h3>
            <PokemonContext.Provider value={{id, setId}}>
            <PokemonImagem />
            </PokemonContext.Provider>
        </div>
    )
}

export default PokemonPrincipal;