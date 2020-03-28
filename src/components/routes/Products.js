import React from 'react';
import update from 'react-addons-update';

import "../../styles/Products.css";

export default class Products extends React.Component{
    state = {
        newItem: {
            name: "",
            amount: 0
        },
        products: [
            {
                name: "Kartol",
                amount: 5
            },
            {
                name: "Kartol",
                amount: 5
            },
            {
                name: "Kartol",
                amount: 5
            }
        ]
    };

    toggleInputs = () => {
        let inputs_div = document.getElementById("add-product-container");

        if (inputs_div.style.display === "block") {
            inputs_div.style.display = "none"
        } else {
            inputs_div.style.display = "block";
        }
    }

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
            <div>

                <h1>Products</h1>
                <button onClick={this.toggleInputs} id="enter-new-product-button">Enter New Product</button>
                
                <div id="add-product-container">
                    <div id="inputs-container" onSubmit={handleSubmit}>
                        <input 
                            onChange={handleName} 
                            value={state.newItem.name} 
                            className="product-input" 
                            type="text" 
                        />
                        <button onClick={minusNewItem} className="plus-minus-buttons" id="minus">-</button>
                        <input 
                            onChange={(e) => handleAmount(e)} 
                            value={state.newItem.amount}
                            className="amount-input"
                            type="number"
                        />
                        <button onClick={plusNewItem} className="plus-minus-buttons" id="plus">+</button>

                        <button onClick={handleSubmit} id="submit-button">Add New Product</button>
                    </div>
                </div>

                {
                    state.products.map((item, index) => {
                        return(
                            <div className="product-item" key={index}>
                                <input className="product-input" readOnly value={state.products[index].name} type="text" />
                                <button className="plus-minus-buttons" id="minus" onClick={() => minus(index)}>-</button>
                                <input 
                                    className="amount-input" 
                                    onChange={(e) => onAmountChange(e, index)} 
                                    onKeyDown={(e) => keyDown(e)} 
                                    onBlur={(e) => blur(e, index)} 
                                    value={state.products[index].amount} 
                                    type="number" 
                                />
                                <button className="plus-minus-buttons" id="plus" onClick={() => plus(index)}>+</button>
                                <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}