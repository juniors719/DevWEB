import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home";

import Criar from "./components/professor/criar";
import Listar from "./components/professor/listar";
import Editar from "./components/professor/editar";

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
        ],
    },
]);

const Main = () => {
    return <RouterProvider router={router} />;
};
export default Main;
