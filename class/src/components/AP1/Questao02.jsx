import React, { useState } from 'react';

const Questao02 = () => {
    const [isFront, setIsFront] = useState(true); 
    // Coloquei true para que Pikachu apareça de frente inicialmente

    // Função que alterna entre a imagem frontal e traseira do Pikachu
    const mudaOrientacao = () => {
        setIsFront(!isFront);
    };

    // URL da imagem do Pikachu.
    // Se isFront for true, a imagem frontal é exibida, caso contrário, a imagem traseira é exibida
    const imagem = isFront
        ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

    return (
        <div>
            <h3>Questão 02</h3>
            <img src={imagem} alt="Pokemon" /><br />
            <button onClick={mudaOrientacao}>Mudar Orientação</button>
        </div>
    );
};

export default Questao02;