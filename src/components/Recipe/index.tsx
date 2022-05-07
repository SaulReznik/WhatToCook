import React, { useState } from 'react';

import { IRecipe } from 'store/types';

import useStyles from './styles';

const Recipe = ({ ingredients, instructions, name }: IRecipe) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <li className={classes.recipeListItem}>
      <h3 onClick={togglePanel}>{name}</h3>
      {
        isOpen
          ? (
            <>
              <ol className={classes.orderList}>
                {ingredients.map((item, index) => (
                  <li key={index}>
                    {item.name}
                    {' '}
                    -
                    {' '}
                    {item.amount}
                  </li>
                ))}
              </ol>
              <p>
                {instructions}
              </p>
            </>
          )
          : null
      }
    </li>
  );
};

export default Recipe;
