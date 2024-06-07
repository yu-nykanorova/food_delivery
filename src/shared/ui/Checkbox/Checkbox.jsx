import { useState } from 'react';

export const Checkbox = ({ defaultChecked = false, label = "", className = "", idValue}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className={`checkbox-container ${className}`}>
            <label htmlFor={idValue} className="checkbox-label">
            <input
                type="checkbox"
                className="checkbox"
                id={idValue}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className="custom-checkbox">
                <div className="checkbox-box"></div>
                <div className="checkbox-text">{label}</div>
            </div>
        </label>
        </div>
    )
}
