import { useState, useEffect } from "react";

const Questao04 = () => {

    const [capitals, setCapitals] = useState([]);

    useEffect(() => {
        // fetchData retorna uma Promise com o vetor
        const fetchData = () => {
            const response = [
                {"capital":["Dublin"],"population":4994724},
                {"capital":["Nicosia"],"population":1207361},
                {"capital":["Madrid"],"population":47351567}
            ];
            return Promise.resolve(response);
        };

        fetchData()
            .then(data => {
                setCapitals(data); // Chamo a função setCapitals para atualizar o estado com os dados da API
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Função que retorna a capital com a maior população
    const getCapitalWithHighestPopulation = () => {
        if (capitals.length === 0) return null;

        const sortedCapitals = [...capitals].sort((a, b) => b.population - a.population);
        return sortedCapitals[0].capital[0];
    };

    // Função que retorna a capital com a menor população
    const getCapitalWithLowestPopulation = () => {
        if (capitals.length === 0) return null;

        const sortedCapitals = [...capitals].sort((a, b) => a.population - b.population);
        return sortedCapitals[0].capital[0];
    }

    return <>
        <h3>Questão 04</h3>
        <h4>Capitais com menor e maior população: </h4>
        <p>Maior população: {getCapitalWithHighestPopulation()}</p>
        <p>Menor população: {getCapitalWithLowestPopulation()}</p>
    </>
};

export default Questao04;