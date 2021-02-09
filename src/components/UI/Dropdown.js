import React, { useState, useCallback } from 'react';

import '../../styles/UI/Dropdown.css';

const Dropdown = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen]);

    const {
        activeItem,
        dropdownItems,
        selectHandler
    } = props;

    return (
        <div className='dropdownContainer'>
            <button
                onClick={toggleDropdown}
                className='dropdownBtn'
            >
                {activeItem}
            </button>
            <div className='dropdownItems'>
                {
                    isOpen ?
                        dropdownItems.map((item, index) => (
                            <div
                                key={`${item}${index}`}
                                className='dropdownItem'
                                onClick={() => selectHandler(item)}
                            >{item}</div>
                        ))
                        : null
                }
            </div>
        </div>
    );
}

export default Dropdown;