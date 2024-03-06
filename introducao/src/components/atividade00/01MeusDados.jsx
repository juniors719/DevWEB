import { Component } from "react";

let nome = "Junior Silva";
let curso = "Ciência da Computação";
let univ = "UFC - Campus Quixadá";

/* function ImprimeDados() {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {univ}</h1>
        </div>
    );
} */

/* const ImprimeDados = () => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {univ}</h1>
        </div>
    );
} */

/* const ImprimeDados = () =>
    <div>
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {univ}</h1>
    </div> */

class ImprimeDados extends Component{
    render() {
        return (
            <div>
                <h1>Nome: {nome}</h1>
                <h1>Curso: {curso}</h1>
                <h1>Universidade: {this.props.univ}</h1>
            </div>
        );
    }
}


export default ImprimeDados;