import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home";

import Criar from "./professor/criar";
import Listar from "./professor/listar";
import Editar from "./professor/editar";

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
