import React from 'react';

// import '../styles/RecipePopup.css';

const RecipePopup = props => {
    const { recipe, closePopup, cookTodayBtnHandler } = props;

    return (
        <div onClick={e => closePopup(e)} id='recipePopupWrapper'>
            <div id='recipePopupContainer'>
                <h3>{recipe.name}</h3>
                <ol>
                    {
                        recipe.ingredients.map((item, index) => (
                            <li key={index}>{item.name} - {item.amount}</li>
                        ))
                    }
                </ol>
                <p>{recipe.instructions}</p>
                <button onClick={cookTodayBtnHandler}>COOK TODAY</button>
            </div>
        </div>
    )
}

export default RecipePopup;
