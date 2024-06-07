import { useState } from 'react';
import { Eye } from '../../icons/Eye';
import { Checkbox } from '../../ui/Checkbox/Checkbox';

export const Form = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPAssword] = useState(false);
  
  const handleEmailCHange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleTogglePasswordVisibility = () => {
    setShowPAssword(!showPassword);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setErrors({});
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)) {
      newErrors.email = "Enter correct email";
    }
    if (password.length < 8) {
      newErrors.password = "Password must have 8 or more symbols";
    }
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoggedIn(true);
      // console.log("Email: ", email);
      // console.log("Password:", password);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form" noValidate>
      <label htmlFor="loginEmail" className="email-label">Email</label>
      {errors.email && <p className="error">{errors.email}</p>}
      <div className="login-form__email">
        <input
          type="email"
          id="loginEmail"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailCHange}
        />
      </div>
      <label htmlFor="loginPass" className="password-label">Password</label>
      {errors.password && <p className="error">{errors.password}</p>}
      <div className="login-form__pass">
        <input
          type={showPassword ? "text" : "password"}
          id="loginPass"
          placeholder="min. 8 characters"
          value={password}
          onChange={handlePasswordChange}
        />
        <Eye handleTogglePasswordVisibility={handleTogglePasswordVisibility} />
      </div>
      <Checkbox className="loginCheckbox" defaultChecked={false} label="Keep me logged in" />
      <button type="submit" className="btn login-form__btn">Login</button>
    </form>
  )
}
