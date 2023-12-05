import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-1 h-screen md:relative absolute hidden md:block">
                    <ul className="menu w-full rounded-b-lg h-full">
                        <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
                        <li><NavLink to='/dashboard/allProducts'>All Product</NavLink></li>
                        <li><NavLink to='/dashboard/addProducts'>Add Product</NavLink></li>
                    </ul>
                </div>
                <div className="md:col-span-3">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;