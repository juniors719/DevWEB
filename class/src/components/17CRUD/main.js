import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home";

import Criar from "./components/professor/criar";
import Listar from "./components/professor/listar";
import Editar from "./components/professor/editar";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";

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
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router} />
        </FirebaseContext.Provider>
    );
};
export default Main;
