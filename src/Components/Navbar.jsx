import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import useAuth from "../Hook/hook";

const Navbar = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <nav className="bg-[#C2EFD4]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center font-Rufina text-4xl font-semibold whitespace-nowrap text-[#224F34]">Rivo</span>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Products</NavLink>
                        </li>
                        {
                            user &&
                            <>

                                <li>
                                    <NavLink to='/dashboard/profile' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Dashboard</NavLink>
                                </li>
                                <li>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="badge badge-sm indicator-item">8</span>
                                            </div>
                                        </div>
                                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                            <div className="card-body">
                                                <span className="font-bold text-lg">8 Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allProducts' className="block md:hidden py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">All Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addProducts' className="block md:hidden py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Add Products</NavLink>
                                </li>

                            </>
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
            </div>
        </nav>

    );
};

export default Navbar;



