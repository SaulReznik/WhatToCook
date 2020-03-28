import React from 'react';
import '../styles/Body.css';
import { Route } from 'react-router-dom';

import Products from './routes/Products';
import Recepies from './routes/Recepies';

export default class Body extends React.Component{
    render(){
        const {
            state,
            handleName,
            handleAmount,
            handleSubmit,
            plusNewItem,
            minusNewItem,
            plus,
            minus,
            deleteItem,
            onAmountChange,
            keyDown,
            blur
        } = this.props;

        return(
            <div className="body">
                <h1>Body</h1>
                <Route path="/products" render={(routeProps) => (
                <Products 
                    {...routeProps}
                    state={state}
                    handleName={handleName}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                    plusNewItem={plusNewItem}
                    minusNewItem={minusNewItem}
                    plus={plus}
                    minus={minus}
                    deleteItem={deleteItem}
                    onAmountChange={onAmountChange}
                    keyDown={keyDown}
                    blur={blur}
                />)} />
                <Route path="/recepies" component={Recepies} />
            </div>
        )
    }
}