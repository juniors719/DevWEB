import { Outlet, Link } from "react-router-dom";
import "../styles/CrudAluno.css";

const Home = () => {
    return (
        <>
            <nav className="bg-gray-100 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Link que leva para a Home */}
                    <Link className="text-xl font-bold text-gray-800" to="/">
                        AP2 - CRUD Aluno
                    </Link>
                    {/* Botão de menu */}
                    <button
                        className="block lg:hidden text-gray-800 focus:outline-none"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() =>
                            document
                                .getElementById("mobile-menu")
                                .classList.toggle("hidden")
                        }
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                    {/* Menu para dispositivos grandes */}
                    <div
                        className="hidden lg:flex lg:items-center lg:w-auto w-full"
                        id="desktop-menu"
                    >
                        <ul className="lg:flex lg:items-center lg:space-x-6">
                            <li className="nav-item">
                                <Link
                                    className="text-gray-800 hover:text-gray-600"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="relative group">
                                <span
                                    className="text-gray-800 hover:text-gray-600 cursor-pointer"
                                    role="button"
                                >
                                    Funções
                                </span>
                                <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-64">
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/criar"
                                        >
                                            Criar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/listar"
                                        >
                                            Listar Alunos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/listarPorCurso"
                                        >
                                            Listar por Curso
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* Menu para dispositivos móveis */}
                    <div
                        className="lg:hidden absolute top-16 right-0 w-48 bg-gray-100 shadow-lg rounded-md hidden"
                        id="mobile-menu"
                    >
                        <ul>
                            <li>
                                <Link
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="relative">
                                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                                    Funções
                                </span>
                                <ul className="absolute hidden bg-white shadow-lg mt-2 rounded-md w-full">
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/criar"
                                        >
                                            Criar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/listar"
                                        >
                                            Listar Alunos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            to="aluno/listarPorCurso"
                                        >
                                            Listar por Curso
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
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
