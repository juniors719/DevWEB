import axios from "axios";

const url = "http://localhost:3001/professores";

class ProfessorService {
    static getProfeesoresAxiosThenCatch = (callback) => {
        axios
            .get(url)
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => console.log(error));
    };

    static getProfessoresAxiosAsyncAwait = async (callback) => {
        const response = await axios.get(url);
        callback(response.data);
    };

    static getProfessoresFetch = (callback) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => callback(data))
            .catch((error) => console.log(error));
    };

    static getProfessoresFetchAsyncAwait = async (callback) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            callback(data);
        } catch (error) {
            console.log(error);
        }
    };
}

export default ProfessorService;
