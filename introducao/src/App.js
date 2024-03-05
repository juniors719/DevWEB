import ImprimeDados from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
    return (
        <div>
            <ImprimeDados
                nome="Francisco Djalma P S Júnior"
                mat="554222"
                curso="Ciência da Computação"
                univ="UFC - Campus Quixadá"
            />
            <hr />
            <Temperatura celsius={100} fahrenheint={86} kelvinn={400} />
        </div>
    );
}

export default App;
