import React, { useState, useCallback } from 'react';
import { IRecipe } from 'store/types';

import '../../styles/UI/Dropdown.css';

interface IDropdown {
    activeItem: string;
    dropdownItems: string[];
    selectHandler: (filter: string) => void;
}

const Dropdown = ({
    activeItem,
    dropdownItems,
    selectHandler
}: IDropdown) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen]);

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