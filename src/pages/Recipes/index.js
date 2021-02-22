import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import '../../styles/Recipes.css';
import Recipe from '../../components/Recipe';
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
    const keyDown = e => setKeyCode(e.keyCode);

    const toggleAddNewRecipe = () => setIsAddRecipeOpen(!isAddRecipeOpen);

    // -------------- New Recipe Item --------------//
    const onNewRecipeItemNameChange = e => {
        const value = e.target.value;

        setNewRecipeItem({
            ...newRecipeItem,
            name: value
        });
    };

    const onNewRecipeItemAmountChange = e => {
        if (restrictedChars.includes(keyCode)) return;

        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        setNewRecipeItem({
            ...newRecipeItem,
            amount: val
        });
    };

    const onNewRecipeInstructionsChange = e => {
        const value = e.target.value;

        setNewRecipe({
            ...newRecipe,
            instructions: value
        })
    };

    const newRecipeItemAddHandler = () => {

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

    };

    // ------------- New Recipe ---------------//
    const onNewRecipeNameChange = e => {
        const value = e.target.value;

        setNewRecipe({
            ...newRecipe,
            name: value
        });
    };

    const handleAddNewRecipe = () => {
        dispatch(addNewRecipe(newRecipe));

        setNewRecipe({
            name: '',
            ingredients: [],
            instructions: ''
        });

        setIsAddRecipeOpen(!isAddRecipeOpen); 
    };

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
                                onChange={onNewRecipeNameChange}
                            />
                        </div>
                        <div>
                            <span>Ingredients:</span>
                            <input value={newRecipeItem.name} onChange={onNewRecipeItemNameChange}/>
                            <input 
                                onChange={onNewRecipeItemAmountChange}
                                onKeyDown={keyDown}
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
                                onChange={onNewRecipeInstructionsChange} 
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