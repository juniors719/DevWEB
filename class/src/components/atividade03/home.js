import { Outlet, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Professor
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="professor/listar"
                                        >
                                            Listar Professor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="professor/criar"
                                        >
                                            Criar Professor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="professor/editar"
                                        >
                                            Editar Professor
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Aluno
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="aluno/listar"
                                        >
                                            Listar Alunos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="aluno/criar"
                                        >
                                            Criar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="aluno/editar"
                                        >
                                            Editar Aluno
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Fim do menu dropdown */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Fim da barra de navegação */}

            {/* Início do conteúdo do site */}

            <Outlet />

            {/* Fim do conteúdo do site */}
        </>
    );
};

export default Home;

/* const Home = () => {
    return (
        <div>
            
            <h1>Home</h1>
            <Link to="/professor/listar"> LISTAR</Link>
            <Link to="/professor/editar"> EDITAR</Link>
            <Link to="/professor/criar"> CRIAR</Link>
            <Outlet />
        </div>
    );
    export default Home;
}; */
