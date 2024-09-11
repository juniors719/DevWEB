// Importa os módulos necessários para o Firebase
import { collection, query, getDocs, addDoc } from "firebase/firestore";

class ProfessorFirebaseService {
    static listar(db, callback) {
        // Cria uma referência para a coleção "professores"
        const c = collection(db, "professores");

        // Cria uma query para buscar todos os documentos da coleção "professores"
        const q = query(c);

        // Busca todos os documentos da coleção "professores"
        getDocs(q)
            .then((querySnapshot) => {
                const professores = [];
                querySnapshot.forEach((professor) => {
                    //console.log(professor.id);
                    //console.log(professor.data());
                    professores.push({
                        _id: professor.id,
                        ...professor.data(),
                    });
                });
                callback(professores);
            })
            .catch((error) => {
                console.error("Erro ao buscar os professores: ", error);
            });
    }

    static criar(db, professor, callback) {
        const c = collection(db, "professores");
        addDoc(c, professor)
            .then((docRef) => {
                callback({ id: docRef.id });
            })
            .catch((error) => {
                console.error("Erro ao criar o professor: ", error);
            });
    }
}

export default ProfessorFirebaseService;
