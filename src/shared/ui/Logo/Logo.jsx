import { Link } from 'react-router-dom';

export const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`header__logo ${className}`}>
        <img src="/src/assets/logo.png" alt="logo" />
    </Link>    
  )
}
