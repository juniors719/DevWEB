// import Pai from "./components/atividade01/01Pai";
// import * as PC from "./components/atividade01/02MeuPC";
import * as Arena from "./components/atividade01/03Batalha";

function App() {
    return (
        <div>
            <h1>Desenvolvimento de Software para Web</h1>
            <Arena.World>
                <Arena.Arena arena="Arena 1" />
                <Arena.Arena arena="Arena 2" />
                <Arena.Arena arena="Arena 3" />
            </Arena.World>
        </div>
    );
}

export default App;
