import { Outlet } from 'react-router-dom'
import PropTypes from "prop-types";
import { Header } from "./shared/ui/Header/Header";
import { Login } from './pages/login/Login';

function App({ loggedIn }) {
  return (
    <>
      {loggedIn ?
        <Login />
      :
        <div className="container">
          <Header />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      }
    </>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;
