import React, { useEffect, useState } from 'react';

const Questao03 = () => {
    const [capitals, setCapitals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Aqui foi utilizado o fetch para buscar os dados da API
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                // Aqui foi utilizado o método json() para transformar os dados em JSON
                const data = await response.json(); 
                setCapitals(data); // Chamo a função setCapitals para atualizar o estado com os dados da API
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
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
    };

    return (
        <div>
            <h3>Questão 03</h3>
            <h4>Capitais com menor e maior população: </h4>
            <p>Maior população: {getCapitalWithHighestPopulation()}</p>
            <p>Menor população: {getCapitalWithLowestPopulation()}</p>
        </div>
    );
};

export default Questao03;