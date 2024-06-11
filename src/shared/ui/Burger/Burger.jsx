
export const Burger = ({ onClick, className }) => {
  return (
    <div className={`header__burger ${className}`} onClick={onClick}>
        <div className="burger">
            <span></span>
        </div>
    </div>
  )
}
