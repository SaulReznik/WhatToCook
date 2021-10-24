import { useState, useCallback } from 'react';

import useStyles from './styles';

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
    
    // -------------------- Styles ----------------------//
    const classes = useStyles();
    const { dropdownBtn, dropdownItemContainer, dropdownItem } = classes;

    const toggleDropdown = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen]);

    return (
        <div className='dropdownContainer'>
            <button
                onClick={toggleDropdown}
                className={dropdownBtn}
            >
                {activeItem}
            </button>
            <div className={dropdownItemContainer}>
                {
                    isOpen ?
                        dropdownItems.map((item, index) => (
                            <div
                                key={`${item}${index}`}
                                className={dropdownItem}
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
