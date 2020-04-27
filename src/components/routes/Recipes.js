import React from 'react';

import '../../styles/Recipes.css';

import Recipe from '../Recipe';
class Recipes extends React.Component{
    state = {
        isAddRecipeOpen: false,
        newRecipe: {
            name: '',
            ingredients: [],
            instructions: ''
        },
        newRecipeItem: {
            name: '',
            amount: '0'
        },
        keyCode: null,
    }

    keyDown = e => this.setState({ keyCode: e.keyCode });

    toggleAddNewRecipe = () => {
        this.setState({isAddRecipeOpen: !this.state.isAddRecipeOpen})
    }

    onNewRecipeNameChange = e => {
        const value = e.target.value;

        this.setState(prevState => ({newRecipe: {
            ...prevState.newRecipe,
            name: value,
        }}))
    }

    onNewRecipeItemNameChange = e => {
        const value = e.target.value;

        this.setState(prevState => ({
            ...prevState,
            newRecipeItem: {
                ...prevState.newRecipeItem,
                name: value,
            }
        }))
    }

    onNewRecipeItemAmountChange = e => {
        const { keyCode } = this.state;
        const { restrictedChars } = this.props;

        if (restrictedChars.includes(keyCode)) return;

        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        this.setState(prevState => ({
            newRecipeItem: {
                ...prevState.newRecipeItem,
                amount: val,
            }
        }))
    }

    onNewRecipeInstructionsChange = e => {
        const value = e.target.value;

        this.setState(prevState => ({
            ...prevState.newRecipe,
            instructions: value
        }))
    }

    newRecipeAdditionHandler = () => {
        const { newRecipe, newRecipeItem } = this.state;

        this.setState(prevState => ({
            ...prevState,
            newRecipe: {
                ...newRecipe,
                ingredients: [
                    ...newRecipe.ingredients,
                    newRecipeItem,
                ]
            },
            newRecipeItem: {
                name: '',
                amount: ''
            },
        }))
    }

    render(){
        const { newRecipe, newRecipeItem } = this.state;
        const { recipes, addNewRecipe } = this.props;

        return (
            <div className="recipes">
                <h1>Recipes</h1>
                <button onClick={this.toggleAddNewRecipe} id='add-recipe-btn'>Add Recipe</button>

                {
                    this.state.isAddRecipeOpen ? 
                        <div id='add-recipe'>
                            <div>
                                <span>Name:</span>
                                <input 
                                    value={newRecipe.name} 
                                    onChange={e => this.onNewRecipeNameChange(e)}
                                />
                            </div>
                            <div>
                                <span>Ingredients:</span>
                                <input value={newRecipeItem.name} onChange={this.onNewRecipeItemNameChange}/>
                                <input 
                                    onChange={(e) => this.onNewRecipeItemAmountChange(e)}
                                    onKeyDown={(e) => this.keyDown(e)}
                                    value={newRecipeItem.amount} 
                                    type="number"
                                />
                                <button onClick={this.newRecipeAdditionHandler}>Add</button>
                            </div>
                            <ol>
                                {newRecipe.ingredients.map((item, index) => (
                                    <li key={index}>{item.name} - {item.amount}</li>
                                ))}
                            </ol>
                            <div>
                                <span>Instructions:</span>
                                <textarea onChange={e => this.onNewRecipeInstructionsChange(e)} />
                            </div>
                            <button onClick={() => addNewRecipe(newRecipe)}>Add New Recipe</button>
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
        )
    }
}

export default Recipes;