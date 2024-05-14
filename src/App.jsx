import { Outlet } from 'react-router-dom'
import PropTypes from "prop-types";
import { Header } from "./shared/ui/Header/Header";

function App(loggedIn) {
  return (
    <div className="container">
      {loggedIn && <Header />}
      <div className="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;
