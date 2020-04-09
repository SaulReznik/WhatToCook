import React from 'react';

import "../../styles/Products.css";

export default class Products extends React.Component{
    state = {
        isAddProductOpen: false
    }

    toggleInputs = () => {
        const { isAddProductOpen } = this.state;
        this.setState({isAddProductOpen: !isAddProductOpen});
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
                
                {
                    this.state.isAddProductOpen ? 
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
                    : null
                }
                

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