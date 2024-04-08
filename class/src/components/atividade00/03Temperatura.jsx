const Temperatura = ({celsius, fahrenheint, kelvinn}) => {

    const celsiusParaFahrenheint = (c) => (c * 9 / 5 + 32).toFixed(2);

    const fahrenheintParaCelsius = (f) => ((f - 32) * 5 / 9).toFixed(2);

    const kelvin = (k) => {
        return {celsius:(k - 273).toFixed(2), fahrenheint:celsiusParaFahrenheint(k-273)};
    }

    return (
        <div>
            <h1>{celsius} ºCelsius para Fahrenheint: {celsiusParaFahrenheint(celsius)} ºF</h1>
            <h1>{fahrenheint} ºFahrenheint para Celsius: {fahrenheintParaCelsius(fahrenheint)} ºC</h1>
            <h1>{kelvinn} Kelvin = </h1>
            <h3>Celsius: {kelvin(kelvinn).celsius} ºC</h3>
            <h3>Fahrenheint: {kelvin(kelvinn).fahrenheint} ºF</h3>
        </div>
    );

}

export default Temperatura;