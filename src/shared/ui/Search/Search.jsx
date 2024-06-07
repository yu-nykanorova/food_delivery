import { useState } from 'react'

export const Search = ({ className = "" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const pattern = /^[A-Za-z0-9]+([ -]?[A-Za-z0-9]+)*$/;
    if (value.length >= 2 && pattern.test(value)) {
        event.target.setCustomValidity("");
        setIsValid(true);
    } else {
        event.target.setCustomValidity("Enter at least 2 characters");
        setIsValid(false);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (isValid && searchTerm) {
        console.log("Searching:", searchTerm);
    }
  };
  return (
    <div className={`header__search ${className}`}>
        <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            required
        />
        <svg onClick={handleSearch} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#83859C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 14L11.1 11.1" stroke="#83859C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {!isValid && (
        <p className="search-info">Enter at least 2 characters</p>
        )}
    </div>
  );
};
