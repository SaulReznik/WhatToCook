import React from 'react';
import update from 'react-addons-update';

import "../../styles/Products.css";

export default class Products extends React.Component{

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
            <div>

                <h1>Products</h1>
                <button onClick={this.toggleInputs} id="enter-new-product-button">Enter New Product</button>
                
                <div id="add-product-container">
                    <div id="inputs-container" onSubmit={handleSubmit}>
                        <input 
                            onChange={handleNewItemName} 
                            value={newItem.name} 
                            className="product-input" 
                            type="text" 
                        />
                        <input 
                            onChange={(e) => onNewItemAmountChange(e)} 
                            value={newItem.amount}
                            className="amount-input"
                            type="number"
                        />
                        <button onClick={handleSubmit} id="submit-button">Add New Product</button>
                    </div>
                </div>

                {
                    products.map((item, index) => {
                        return(
                            <div className="product-item" key={index}>
                                <input className="product-input" readOnly value={products[index].name} type="text" />
                                <input 
                                    className="amount-input" 
                                    onChange={(e) => onAmountChange(e, index)} 
                                    onKeyDown={(e) => keyDown(e)}
                                    value={products[index].amount} 
                                    type="number" 
                                />
                                <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}