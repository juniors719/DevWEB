import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonIncrementar from "./PokemonIncrementar";
import PokemonDecrementar from "./PokemonDecrementar";


const PokemonImagem = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const {id} = useContext(PokemonContext);

    return (
        <div>
            <img
                src={url + id + ".png"} 
                alt="Pokemon" 
                width="150"
                />
            <PokemonIncrementar />
            <PokemonDecrementar />
        </div>
    )
}

export default PokemonImagem;