//forma classica
/* function HelloWorld() {
  return (
    <div>
        <h2>Meu primeiro componente REACT!</h2> 
    </div>
  )
} */

const HelloWorld = () => {

    const name = 'Junior'

    const newName = name.toUpperCase()

    function sum(a, b) {
        return a + b
    }

    const url = 'https://via.placeholder.com/150'

    return (
        <div>
            <h1>Hello World</h1>
            <h2>Meu primeiro componente REACT!</h2>
            <p>Olá, {name}</p>
            <p>Olá, {newName}</p>
            <p>Soma = {sum(2,3)}</p>
            <img src={url} alt="Imagem de teste" />
        </div>
    )
}

export default HelloWorld;