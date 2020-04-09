import React from 'react';

const Recipe = props => {
    const { ingredients, instructions, togglePanel, name, isOpen } = props;
    return (
        <li onClick={togglePanel}>
            <h3>{name}</h3>
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