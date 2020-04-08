import React from 'react';
import '../styles/Body.css';
import { Route } from 'react-router-dom';

import Products from './routes/Products';
import Recipes from './routes/Recipes';

const Body = props => {
    const {
        newItem,
        products,
        recipes,
        handleNewItemName,
        onNewItemAmountChange,
        handleSubmit,
        deleteItem,
        onAmountChange,
        keyDown,
    } = props;

    return(
        <div className="body">
            <h1>Body</h1>
            <Route exact path="/products" render={props => (
                <Products
                    {...props}
                    newItem={newItem}
                    products={products}
                    handleNewItemName={handleNewItemName}
                    onNewItemAmountChange={onNewItemAmountChange}
                    handleSubmit={handleSubmit}
                    deleteItem={deleteItem}
                    onAmountChange={onAmountChange}
                    keyDown={keyDown}
                />)}
            />
            <Route exact path="/recipes" render={props => (
                <Recipes
                    {...props}
                    recipes={recipes}
                />)}
                />

        </div>
    )
}

export default Body;