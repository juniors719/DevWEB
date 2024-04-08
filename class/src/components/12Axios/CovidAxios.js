//https://dontpad.com/webt04

import { useEffect, useState } from "react";
import axios from "axios";

const CovidAxios = () => {
    const [casos, setCasos] = useState(0);
    const [mortes, setMortes] = useState(0);

    useEffect(() => {
        axios
            .get("https://covid19-brazil-api.now.sh/api/report/v1")
            .then((resposta) => {
                setCasos(resposta.data.data[0].cases);
                setMortes(resposta.data.data[0].deaths);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>CEARÁ</h1>
            <h3>Casos: {casos}</h3>
            <h3>Mortes: {mortes}</h3>
        </>
    );
};

export default CovidAxios;
