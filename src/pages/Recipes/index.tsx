import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import './Recipes.css';
import useStyles from './styles';

import Recipe from '../../components/Recipe';

import { restrictedChars } from '../../constants';
import actions from '../../store/actions';
import { IRecipe } from 'store/types';

// ---------------- Actions ------------------ //
const {
    addNewRecipe
} = actions.recipes;

const Recipes = () => {
    const [keyCode, setKeyCode] = useState(null as any);
    const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);
    const [newRecipeItem, setNewRecipeItem] = useState({
        name: '',
        amount: '0'
    });
    const [newRecipe, setNewRecipe] = useState<IRecipe>({
        name: '',
        ingredients: [],
        instructions: ''
    });

    // ----------------- Store ---------------- //
    const dispatch = useDispatch();
    const recipes: IRecipe[] = useSelector((state: any) => state.recipes);

    // ---------------- Styles ---------------- //
    const classes = useStyles();
    const { addRecipeBtn } = classes;

    // -------------- General hendlers ----------//
    const keyDown: React.KeyboardEventHandler = e => setKeyCode(e.keyCode);

    const toggleAddNewRecipe = () => setIsAddRecipeOpen(!isAddRecipeOpen);

    // -------------- New Recipe Item --------------//
    const onNewRecipeItemNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setNewRecipeItem({
            ...newRecipeItem,
            name: value
        });
    };

    const onNewRecipeItemAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (restrictedChars.includes(keyCode)) return;
        const { value } = e.target;
        const amount = `${parseFloat(value)}`.slice(0, 4);

        setNewRecipeItem({
            ...newRecipeItem,
            amount
        });
    };

    const onNewRecipeInstructionsChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
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
    const onNewRecipeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            <button onClick={toggleAddNewRecipe} className={addRecipeBtn}>Add Recipe</button>
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
                            <input value={newRecipeItem.name} onChange={onNewRecipeItemNameChange} />
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