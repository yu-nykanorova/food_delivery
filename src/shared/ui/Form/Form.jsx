import { Eye } from '../../icons/Eye';

export const Form = ({ setLoggedIn }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };
  return (
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
  )
}
