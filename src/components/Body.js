import React from 'react';
import '../styles/Body.css';
import { Route } from 'react-router-dom';

import Products from './routes/Products';
import Recepies from './routes/Recepies';

export default class Body extends React.Component{
    render(){
        const {
            newItem,
            products,
            handleNewItemName,
            onNewItemAmountChange,
            handleSubmit,
            deleteItem,
            onAmountChange,
            keyDown,
        } = this.props;

        return(
            <div className="body">
                <h1>Body</h1>
                <Route path="/products" render={props => (
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
                />)} />
                <Route path="/recepies" render={props => {
                    <Recepies 
                        {...props}

                    />
                }} />
            </div>
        )
    }
}