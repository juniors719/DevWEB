const FuncoesInternas = () => {

    let num1 = 10;
    let num2 = 5;
    let myNumber = 3.14159265359;

    function somar(a, b) {
        return a + b;
    }

    const subtrair = (a, b) => {
        return a - b;
    }

    const multiplicar = (a, b) => a * b;

    const dividir = (a,b) => a / b;

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>O resultado da soma é: {somar(num1, num2)}</h3>
            <h3>O resultado da subtração é: {subtrair(num1, num2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(num1, num2)}</h3>
            <h3>O resultado da divisão é: {dividir(num1, num2).toFixed(2)}</h3>
            <h2>{myNumber.toFixed(3)}</h2>
        </div>
    )
}

export default FuncoesInternas;