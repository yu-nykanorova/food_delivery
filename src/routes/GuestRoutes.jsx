import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const GuestRoutes = ({ loggedIn }) => {
    return loggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

GuestRoutes.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

export default GuestRoutes;