import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import useAuth from "../Hook/hook";

const Navbar = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <nav className="bg-[#C2EFD4] border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center font-Rufina text-4xl font-semibold whitespace-nowrap text-[#224F34]">Rivo</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-[#224F34]" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-center rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Products</NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink to='/dashboard' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Dashboard</NavLink>
                            </li>
                        }
                        {
                            user ?
                                <li className="block cursor-pointer py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" onClick={handleSignOut} >
                                    Sign Out
                                </li>
                                :
                                <li>
                                    <NavLink to='/login' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Login</NavLink>
                                </li>
                        }

                    </ul>
                </div>
            </div >
        </nav >

    );
};

export default Navbar;