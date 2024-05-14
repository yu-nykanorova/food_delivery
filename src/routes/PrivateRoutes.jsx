import PropTypes from "prop-types";
import { Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = ({ loggedIn }) => {
    return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

PrivateRoutes.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoutes;