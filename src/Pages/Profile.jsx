import useAuth from "../Hook/hook";
import { Helmet } from 'react-helmet-async';


const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="mt-6">
            <Helmet><title>{user.displayName}</title></Helmet>
            <div>
                <div className="hero">
                    <div className="flex-col">
                        <div className="">
                            {
                                user.photoURL ? <img src={user?.photoURL} className="w-full rounded-lg shadow-2xl" /> : <div className="w-full rounded-2xl mb-9 shadow-2xl h-52 bg-myColor text-[#fff] text-5xl font-bold flex justify-center items-center">
                                    {user.email.slice(0,1)[0].toUpperCase()}
                                </div>
                            }
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>Name</th>
                                        <td>{user.displayName ? user.displayName : user.email.split('@')[0]}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>Email</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>Phone</th>
                                        <td>{user?.phoneNumber || ''}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;