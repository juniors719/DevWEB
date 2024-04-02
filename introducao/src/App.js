// Modifique o exemplo (crie dentro da sua pasta de atividades uma cópia do
//     exemplo) em
//     https://github.com/jeffersoncarvalho/ufc_2023_1/tree/main/0_PROF/00_introd
//     uction/src/components/01-introduction/06_context para que o valor de “value”,
//     em FunctionA, seja inicializado da seguinte forma:
//     ○ const cores = {bkgA:”green”,bkgB:”white”,bkgC:”yellow”, bkgD:”blue”}
//     ○ value = {cores}
//     Cada valor de “bkg” deve ser lido apenas pelo componente correspondente,
//     por exemplo, bkgA deve ser lido pelo componente A.
//     ● Dentro de cada componente, use o valor lido dentro do estilo de <h1> na
//     propriedade backgroundColor.
//     ● Use contextos (forma legada e forma atual) para prover e consumir os dados.

import React from "react";
import ClassContext from "./components/atividade02/ClassContext";
import FunctionContextA from "./components/atividade02/FunctionContextA";

function App() {
    return (
        <div>
            <h1>Contexto de Cores</h1>
            <ClassContext />
            <FunctionContextA />
        </div>
    );
}

export default App;
