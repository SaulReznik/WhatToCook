import React from 'react';

import '../../styles/UI/Dropdown.css';

class Dropdown extends React.Component{
    state = {
        isOpen: false,
    }

    toggleDropdown = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render(){
        const {
            activeItem,
            dropdownItems,
            selectHandler
        } = this.props;

        return (
            <div className='dropdownContainer'>
                <button
                    onClick={this.toggleDropdown}
                    className='dropdownBtn'
                >
                    {activeItem}
                </button>
                <div className='dropdownItems'>
                    {
                        this.state.isOpen ?
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
        )
    };
}

export default Dropdown;