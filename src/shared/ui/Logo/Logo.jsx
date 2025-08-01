import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";

export const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`header__logo ${className}`}>
        <img src={ logo } alt="logo" />
    </Link>    
  )
}
