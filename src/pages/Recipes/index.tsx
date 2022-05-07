import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import './Recipes.css';
import { IRecipe } from 'store/types';

import Recipe from '../../components/Recipe';
import { DEFAULT_TEXTAREA_ROWS, restrictedChars } from '../../constants';
import actions from '../../store/actions';

import useStyles from './styles';

// ---------------- Actions ------------------ //
const {
  addNewRecipe,
} = actions.recipes;

const Recipes = () => {
  const [keyCode, setKeyCode] = useState(null as any);
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);
  const [newRecipeItem, setNewRecipeItem] = useState({
    name: '',
    amount: '0',
  });
  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    name: '',
    ingredients: [],
    instructions: '',
  });

  // ----------------- Store ---------------- //
  const dispatch = useDispatch();
  const recipes: IRecipe[] = useSelector((state: any) => state.recipes);

  // ---------------- Styles ---------------- //
  const classes = useStyles();

  // -------------- General hendlers ----------//
  const keyDown: React.KeyboardEventHandler = e => setKeyCode(e.keyCode);

  const toggleAddNewRecipe = () => setIsAddRecipeOpen(!isAddRecipeOpen);

  // -------------- New Recipe Item --------------//
  const onNewRecipeItemNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNewRecipeItem({
      ...newRecipeItem,
      name: value,
    });
  };

  const onNewRecipeItemAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (restrictedChars.includes(keyCode)) return;
    const { value } = e.target;
    const amount = `${parseFloat(value)}`.slice(0, 4);

    setNewRecipeItem({
      ...newRecipeItem,
      amount,
    });
  };

  const onNewRecipeInstructionsChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    const { value } = e.target;

    setNewRecipe({
      ...newRecipe,
      instructions: value,
    });
  };

  const newRecipeItemAddHandler = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [
        ...newRecipe.ingredients,
        newRecipeItem,
      ],
    });

    setNewRecipeItem({
      name: '',
      amount: '',
    });
  };

  // ------------- New Recipe ---------------//
  const onNewRecipeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNewRecipe({
      ...newRecipe,
      name: value,
    });
  };

  const handleAddNewRecipe = () => {
    dispatch(addNewRecipe(newRecipe));

    setNewRecipe({
      name: '',
      ingredients: [],
      instructions: '',
    });

    setIsAddRecipeOpen(!isAddRecipeOpen);
  };

  return (
    <div className="recipes">
      <h1>Recipes</h1>
      <button onClick={toggleAddNewRecipe} className={classes.addRecipeBtn}>Add Recipe</button>
      {
                isAddRecipeOpen
                  ? (
                    <div id="add-recipe" className={classes.addRecipe}>
                      <div>
                        <label>
                          Name:
                          <input
                            value={newRecipe.name}
                            onChange={onNewRecipeNameChange}
                          />
                        </label>
                      </div>
                      <div className={classes.ingredients}>
                        <label>
                          Ingredients:
                          <div className={classes.ingredientsContent}>
                            <input value={newRecipeItem.name} onChange={onNewRecipeItemNameChange} />
                            <input
                              onChange={onNewRecipeItemAmountChange}
                              onKeyDown={keyDown}
                              value={newRecipeItem.amount}
                              type="number"
                            />
                          </div>
                        </label>
                        <button onClick={newRecipeItemAddHandler}>Add</button>
                      </div>
                      <ol>
                        {newRecipe.ingredients.map((item, index) => (
                          <li key={index}>
                            {item.name}
                            {' '}
                            -
                            {' '}
                            {item.amount}
                          </li>
                        ))}
                      </ol>
                      <div>
                        <label>
                          Instructions:
                          <textarea
                            rows={DEFAULT_TEXTAREA_ROWS}
                            value={newRecipe.instructions}
                            onChange={onNewRecipeInstructionsChange}
                          />
                        </label>
                      </div>
                      <button className={classes.btnRecipes} onClick={handleAddNewRecipe}>Add New Recipe</button>
                    </div>
                  )
                  : null
            }
      <ol className={classes.recipeList}>
        {
                    recipes.map((item, index) => (
                      <Recipe
                        key={index}
                        name={item.name}
                        ingredients={item.ingredients}
                        instructions={item.instructions}
                      />
                    ))
                }
      </ol>
    </div>
  );
};

export default Recipes;
