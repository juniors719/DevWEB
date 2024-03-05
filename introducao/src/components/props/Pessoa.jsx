/* function Pessoa({ name, foto, idade, profissao }) {
  return (
    <div>
        <img src={foto} alt={name} />
        <h2>Nome: {name}</h2>
        <p>Idade: {idade} anos</p>
        <p>Profissão: {profissao}</p>
    </div>
  );
} */

const Pessoa = ({ name, foto, idade, profissao }) => 
    <div>
        <img src={foto} alt={name} />
        <h2>Nome: {name}</h2>
        <p>Idade: {idade} anos</p>
        <p>Profissão: {profissao}</p>
    </div>

export default Pessoa;