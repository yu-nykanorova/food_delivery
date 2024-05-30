import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="header__logo">
        <img src="/src/assets/logo.png" alt="logo" />
    </Link>    
  )
}
