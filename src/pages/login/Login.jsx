import PropTypes from 'prop-types';
import { Logo } from '../../shared/ui/Logo/Logo';
import { Promo } from '../../shared/ui/Promo/Promo';
import { Form } from '../../shared/ui/Form/Form';


export const Login = ({ setLoggedIn }) => {
  
  return (
    <div className="login-container">
      <div className="login">
        <Logo className="login__logo" />
        <div className="login__title">Login</div>
        <p className="login__desc">Sign in with your data that you entered during your registration.</p>
        <Form setLoggedIn={setLoggedIn} />
        <p className="login__forgot-password">Forgot password</p>
        <p className="login__sign-up">Don`t have an account? <span>Sign up</span></p>
      </div>
      <Promo />
    </div>
  )
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};
