import { Outlet, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles/CrudAluno.css";

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Link que leva para a Home */}
                    <a className="navbar-brand" href="/">
                        AP2 - CRUD Aluno
                    </a>
                    {/* Botão de menu */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menu */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Funções
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        {/* Link que leva para a Criar Professor */}
                                        <Link
                                            className="dropdown-item"
                                            to="aluno/criar"
                                        >
                                            Criar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        {/* Link que leva para a Listar Professor */}
                                        <Link
                                            className="dropdown-item"
                                            to="aluno/listar"
                                        >
                                            Listar Alunos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Fim do menu dropdown */}
                        </ul>
                    </div>
                    {/* Fim do menu */}
                </div>
            </nav>
            {/* Fim da barra de navegação */}

            {/* Outlet para renderizar os componentes filhos */}

            <Outlet />

            {/* Fim do Outlet */}
        </>
    );
};

export default Home;
