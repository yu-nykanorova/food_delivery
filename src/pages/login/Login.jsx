import { Logo } from '../../shared/ui/Logo/Logo';
import { Eye } from '../../shared/icons/Eye'

export const Login = ({ setLoggedIn }) => {
  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  return (
    <div className="login-container">
      <div className="login">
        <Logo />
        <div className="login__title">Login</div>
        <p className="login__desc">Sign in with your data that you entered during your registration.</p>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="loginEmail" className="email-label">Email</label>
          <div className="login-form__email">
            <input type="email" id="loginEmail" placeholder="name@example.com"/>
          </div>
          <label htmlFor="loginPass" className="password-label">Password</label>
          <div className="login-form__pass">
            <input type="password" id="loginPass" placeholder="min. 8 characters"/>
            <Eye />
          </div>
          <input type="checkbox" id="loginCheckbox"/>
          <div className="login-form__checkbox"></div>
          <div className="login-form__checkbox-text">Keep me logged in</div>
          <button type="submit" className="login-form__btn">Login</button>
        </form>
        <p className="login-form__forgot-password">Forgot password</p>
        <p className="login-form__sign-up">Don’t have an account? <span>Sign up</span></p>
      </div>
      <div className="promo-section">
        <img src="/src/assets/img/promo.jpg" alt="promo poster" />
      </div>
    </div>
  )
}
