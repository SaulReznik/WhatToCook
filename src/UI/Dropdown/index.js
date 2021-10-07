import React, { useState, useCallback } from 'react';

// import '../../styles/UI/Dropdown.css';
import useStyles from './styles';

const Dropdown = props => {
    // -------------------- Styles ----------------------//
    const classes = useStyles();
    const { dropdownBtn, _dropdownItems, dropdownItem } = classes;

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
                className={dropdownBtn}
            >
                {activeItem}
            </button>
            <div className={_dropdownItems}>
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