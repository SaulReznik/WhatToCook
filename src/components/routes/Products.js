import React from 'react';
import "../../styles/Products.css";

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newItem: {
                name: "",
                amount: 0
            },
            products: {
                
            }
        }

        this.toggleInputs = this.toggleInputs.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
    }

    minus() {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount - 1}})
    }

    plus() {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount + 1}})
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
                    <div id="inputs-container">
                        <input 
                            onChange={(e) => { this.setState({ newItem: { ...this.state.newItem, name: e.target.value }})}} 
                            value={this.state.newItem.name} 
                            id="new-product-input" 
                            type="text" 
                        />
                        <button onClick={this.minus} className="plus-minus-buttons" id="minus">-</button>
                        <input 
                            onChange={(e) => { this.setState({ newItem: { ...this.state.newItem, amount: e.target.value } })}} 
                            value={this.state.newItem.amount} 
                            type="number" 
                        />
                        <button onClick={this.plus} className="plus-minus-buttons" id="plus">+</button>
                    </div>
                </div>
            </div>
        )
    }
}