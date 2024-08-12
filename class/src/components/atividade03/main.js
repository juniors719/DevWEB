import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home";

import Criar from "./professor/criar";
import Listar from "./professor/listar";
import Editar from "./professor/editar";
import ListarAlunos from "./aluno/listarA";
import CriarAlunos from "./aluno/criarA";
import EditarAlunos from "./aluno/editarA";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "professor/listar",
                element: <Listar />,
            },
            {
                path: "professor/criar",
                element: <Criar />,
            },
            {
                path: "professor/editar",
                element: <Editar />,
            },
            {
                path: "aluno/listar",
                element: <ListarAlunos />,
            },
            {
                path: "aluno/criar",
                element: <CriarAlunos />,
            },
            {
                path: "aluno/editar",
                element: <EditarAlunos />,
            },
        ],
    },
]);

const Main = () => {
    return <RouterProvider router={router} />;
};
export default Main;
