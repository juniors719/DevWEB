// Nomes: Maria Eduarda Lima Mota e Francisco Djalma Pereira da Silva Junior
// Matrículas: 556276 e 554222
// Curso: Ciência da Computação




import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";

import Criar from "./components/aluno/Criar";
import Listar from "./components/aluno/Listar";
import Editar from "./components/aluno/Editar";
import ListarPorCurso from "./components/aluno/ListarPorCurso";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "aluno/listar",
                element: <Listar />,
            },
            {
                path: "aluno/criar",
                element: <Criar />,
            },
            {
                path: "aluno/editar/:id",
                element: <Editar />,
            },
            {
                path: "aluno/listarPorCurso",
                element: <ListarPorCurso />,
            },
        ],
    },
]);

const Main = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router} />
        </FirebaseContext.Provider>
    );
};
export default Main;
