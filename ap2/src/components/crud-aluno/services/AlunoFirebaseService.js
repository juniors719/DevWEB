import {
    collection,
    query,
    getDocs,
    addDoc,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
} from "firebase/firestore";

class AlunoFirebaseService {
    static listar(db, callback) {
        // Cria uma referência para a coleção "alunos"
        const c = collection(db, "alunos");

        // Cria uma query para buscar todos os documentos da coleção "alunos"
        const q = query(c);

        // Busca todos os documentos da coleção "alunos"
        getDocs(q)
            .then((querySnapshot) => {
                const alunos = [];
                querySnapshot.forEach((aluno) => {
                    alunos.push({
                        id: aluno.id,
                        ...aluno.data(),
                    });
                });
                callback(alunos);
            })
            .catch((error) => {
                console.error("Erro ao buscar os alunos: ", error);
            });
    }

    static criar(db, aluno, callback) {
        const c = collection(db, "alunos");
        addDoc(c, aluno)
            .then((docRef) => {
                callback({ id: docRef.id });
            })
            .catch((error) => {
                console.error("Erro ao criar o aluno: ", error);
            });
    }

    static getById(db, callback, id) {
        const docRef = doc(db, "alunos", id);
        getDoc(docRef)
            .then((docSnap) => {
                callback(docSnap.data());
            })
            .catch((error) => console.log(error));
    }

    static atualizar(db, id, alunoAtualizado, callback) {
        const MyDoc = doc(db, "alunos", id);
        setDoc(MyDoc, alunoAtualizado)
            .then(() => {
                callback({ id: MyDoc.id });
            })
            .catch((error) => {
                console.error("Erro ao atualizar o aluno: ", error);
            });
    }

    static deletar(db, callback, id) {
        const docRef = doc(db, "alunos", id);
        deleteDoc(docRef)
            .then(() => {
                callback({ id });
            })
            .catch((error) => {
                console.error("Erro ao deletar o aluno: ", error);
            });
    }
}

export default AlunoFirebaseService;
