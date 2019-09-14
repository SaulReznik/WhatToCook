import React from 'react';
import "./styles/InputWithAmount.css";

export default function InputWithAmount(props) {
    return (
        <div className="inputs-container">
            <input onChange={addNewItem} value={props.name} className="new-product-inputs" type="text"/>
            <div className="inputs-amount-container">
                <button className="subtraction-button">-</button>
                <input value={props.amount} className="amount-input" type="number"/>
                <button className="addition-button">+</button>
            </div>
        </div>
    )
};


