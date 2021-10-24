import React, { useState } from 'react';
import { IRecipe } from 'store/types';

const Recipe = ({ ingredients, instructions, name }: IRecipe) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

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