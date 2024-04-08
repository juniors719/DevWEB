import { useEffect, useState } from "react";

const MinhaPromessa = new Promise((resolve, rejected) => {
    // computação de X segundos...
    setTimeout(
        () => {
            const meuNumero = Math.floor(Math.random() * 10) + 1;
            if (meuNumero % 2 === 0) {
                resolve("Deu tudo certo. Seu número é " + meuNumero);
            } else {
                rejected("Deu tudo errado. Seu número é " + meuNumero);
            }
        },
        2000 // tempo em milisegundos
    );
});

const ComponentePromessa = () => {
    const [resultado, setResultado] = useState("");

    function apiGetPromessa() {
        // se comunica com alguém remoto...
        return MinhaPromessa;
    }

    useEffect(() => {
        apiGetPromessa()
            .then((valor) => {
                setResultado(valor);
            })
            .catch((error) => {
                setResultado(error);
            });
    }, []);

    return (
        <>
            <h3>Promessa!</h3>
            <h4>Resultado: {resultado}</h4>
        </>
    );
};

export default ComponentePromessa;
