import React, { useState, useCallback } from 'react';

const Recipe = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    const togglePanel = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]); 

    const { ingredients, instructions, name } = props;

    return (
        <li>
            <h3 onClick={togglePanel}>{name}</h3>
            {
                isOpen ?
                    <>
                        <ol>
                            {ingredients.map((item, index) => (
                                <li key={index}>{item.name} - {item.amount}</li>
                            ))}
                        </ol>
                        <p>
                            {instructions}
                        </p>
                    </>
                    : null
            }
        </li>
    )
    
}

export default Recipe;