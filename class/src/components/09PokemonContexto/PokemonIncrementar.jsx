import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const PokemonIncrementar = () => {

    const {setId} = useContext(PokemonContext);



    return (
        <div>
            <button
                onClick={
                    () => {
                        setId(
                            (prevId) => {
                                return prevId + 1;
                            }
                        )
                    }
                }
            >
                Incrementar
            </button>
        </div>
    )
}

export default PokemonIncrementar;