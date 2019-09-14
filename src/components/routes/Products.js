import React from 'react';
import "../../styles/Products.css";

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addItem: {
                name: "",
                amount: 0
            },
            products: {
                
            }
        }

        this.toggleInputs = this.toggleInputs.bind(this);
    }

    addNewItem() {

    }

    toggleInputs() {
        let inputs_div = document.getElementById("add-product-container");

        if (inputs_div.style.display === "block") {
            inputs_div.style.display = "none"
        } else {
            inputs_div.style.display = "block";
        }
    }

    render(){
        return(
            <div>
                <h1>Products</h1>
                <button onClick={this.toggleInputs} id="enter-new-product-button">Enter New Product</button>
                <div id="add-product-container">
                    <div className="inputs-container">
                        <input onChange={this.addNewItem} value={this.state.addItem.name} className="new-product-inputs" type="text" />
                        <div className="inputs-amount-container">
                            <button className="subtraction-button">-</button>
                            <input onChange={this.addNewItem} value={this.state.addItem.amount} className="amount-input" type="number" />
                            <button className="addition-button">+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}