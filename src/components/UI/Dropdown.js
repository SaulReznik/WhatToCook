import React from 'react';

import '../../styles/UI/Dropdown.css';

const Dropdown = props => {
    const {
        toggleDropdown,
        activeItem,
        showDropdown,
        dropdownItems,
        selectHandler
    } = props;
    return(
    <div className='dropdownContainer'>
        <button
            onClick={toggleDropdown}
            className='dropdownBtn'
        >{activeItem}</button>
        <div className='dropdownItems'>
            {
                showDropdown ?
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
)};

export default Dropdown;