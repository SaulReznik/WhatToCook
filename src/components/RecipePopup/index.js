import React from 'react';

import useStyles from './styles';

const RecipePopup = props => {
    const { recipe, closePopup, cookTodayBtnHandler } = props;

    // ------------------ styles ------------------- //
    const classes = useStyles();
    const { popupWrapper, popupContainer } = classes;

    return (
        <div onClick={e => closePopup(e)} className={popupWrapper}>
            <div className={popupContainer}>
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
