import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Recipes.css';
import Recipe from '../Recipe';
import { restrictedChars } from '../../constants';
import actions from '../../store/actions';

// ---------------- Actions ------------------ //
const {
    addNewRecipe
} = actions.recipes;

const Recipes = () => {
    const [ keyCode, setKeyCode ] = useState(null);
    const [ isAddRecipeOpen, setIsAddRecipeOpen ] = useState(false);
    const [ newRecipeItem, setNewRecipeItem ] = useState({
        name: '',
        amount: '0'
    });
    const [ newRecipe, setNewRecipe ] = useState({
        name: '',
        ingredients: [],
        instructions: ''
    });

    // ----------------- Store ---------------- //
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);

    // -------------- General hendlers ----------//
    const keyDown = useCallback(e => {
        setKeyCode(e.keyCode);
    },[ keyCode ]);

    const toggleAddNewRecipe = useCallback(() => {
        setIsAddRecipeOpen(!isAddRecipeOpen);
    }, [ isAddRecipeOpen ]);

    // -------------- New Recipe Item --------------//
    const onNewRecipeItemNameChange = useCallback(e => {
        const value = e.target.value;

        setNewRecipeItem({
            ...newRecipeItem,
            name: value
        });
    }, [ newRecipeItem ]);

    const onNewRecipeItemAmountChange = useCallback(e => {
        if (restrictedChars.includes(keyCode)) return;

        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        setNewRecipeItem({
            ...newRecipeItem,
            amount: val
        });
    }, [ newRecipeItem ]);

    const onNewRecipeInstructionsChange = useCallback(e => {
        const value = e.target.value;

        setNewRecipe({
            ...newRecipe,
            instructions: value
        })
    }, [ newRecipe ])

    const newRecipeItemAddHandler = useCallback(() => {

        setNewRecipe({
            ...newRecipe,
            ingredients: [
                ...newRecipe.ingredients,
                newRecipeItem,
            ]
        });

        setNewRecipeItem({
            name: '',
            amount: ''
        });

    }, [ newRecipe, newRecipeItem, isAddRecipeOpen ]);

    // ------------- New Recipe ---------------//
    const onNewRecipeNameChange = useCallback(e => {
        const value = e.target.value;

        setNewRecipe({
            ...newRecipe,
            name: value
        });
    }, [ newRecipe ]);

    const handleAddNewRecipe = useCallback(() => {
        dispatch(addNewRecipe(newRecipe));

        setNewRecipe({
            name: '',
            ingredients: [],
            instructions: ''
        });

        setIsAddRecipeOpen(!isAddRecipeOpen); 
    }, [ newRecipe ]);

    return (
        <div className="recipes">
            <h1>Recipes</h1>
            <button onClick={toggleAddNewRecipe} id='add-recipe-btn'>Add Recipe</button>
            {
                isAddRecipeOpen ? 
                    <div id='add-recipe'>
                        <div>
                            <span>Name:</span>
                            <input 
                                value={newRecipe.name} 
                                onChange={e => onNewRecipeNameChange(e)}
                            />
                        </div>
                        <div>
                            <span>Ingredients:</span>
                            <input value={newRecipeItem.name} onChange={(e) => onNewRecipeItemNameChange(e)}/>
                            <input 
                                onChange={(e) => onNewRecipeItemAmountChange(e)}
                                onKeyDown={(e) => keyDown(e)}
                                value={newRecipeItem.amount} 
                                type="number"
                            />
                            <button onClick={newRecipeItemAddHandler}>Add</button>
                        </div>
                        <ol>
                            {newRecipe.ingredients.map((item, index) => (
                                <li key={index}>{item.name} - {item.amount}</li>
                            ))}
                        </ol>
                        <div>
                            <span>Instructions:</span>
                            <textarea 
                                value={newRecipe.instructions} 
                                onChange={e => onNewRecipeInstructionsChange(e)} 
                            />
                        </div>
                        <button onClick={handleAddNewRecipe}>Add New Recipe</button>
                    </div>
                    : null
            }
            <ol>
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