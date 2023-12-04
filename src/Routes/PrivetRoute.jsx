import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/hook";
import { PropTypes } from 'prop-types';
import Loader from './../utility/Loader/Loader';


const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useAuth();
    if (loader) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login' />
    }
    return children
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;