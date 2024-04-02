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

    async function apiGetPromessa() {
        try {
            const res = await MinhaPromessa;
            setResultado(res);
        } catch (error) {
            setResultado(error);
        }
    }

    useEffect(() => {
        apiGetPromessa();
    }, []);

    return (
        <>
            <h3>Promessa com Async!</h3>
            <h4>Resultado: {resultado}</h4>
        </>
    );
};

export default ComponentePromessa;
