import React from 'react';

const Recipe = props => {
    const { ingredients, instructions } = props;
    return (
        <div>
            <ol>
                {ingredients.map((item, index) => (
                    <li key={index}>{item.name} - {item.amount}</li>
                ))}
            </ol>
            <p>
                {instructions}
            </p>
        </div>
    )
}

export default Recipe;