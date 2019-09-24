import React from 'react';
import update from 'react-addons-update';

import "../../styles/Products.css";

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
        }

        this.toggleInputs = this.toggleInputs.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.plusNewItem = this.plusNewItem.bind(this);
        this.minusNewItem = this.minusNewItem.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }

    toggleInputs() {
        let inputs_div = document.getElementById("add-product-container");

        if (inputs_div.style.display === "block") {
            inputs_div.style.display = "none"
        } else {
            inputs_div.style.display = "block";
        }
    }

    handleName(e) {
        this.setState({ newItem: { ...this.state.newItem, name: e.target.value } })
    }

    handleAmount(e) {
        const regex = /^[0-9\b]+$/;

        if (regex.test(e.target.value)) {
            this.setState({ newItem: { ...this.state.newItem, amount: e.target.value } })
        }
        
    }

    minusNewItem() {
        if (this.state.newItem.amount > 0){
            this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount - 1 } })
        }
    }

    plusNewItem() {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount + 1}})
    }

    minus(index){
        if (this.state.products[index].amount > 0) {
            let products = update(this.state.products, { [index]: { amount: { $set: this.state.products[index].amount - 1 } } });
            this.setState({
                products: products
            })
        }
    }

    plus(index) {
        let products = update(this.state.products, { [index]: { amount: { $set: this.state.products[index].amount + 1 } } });
        this.setState({
            products: products
        })
    }

    delete(id) {
        this.setState({products: this.state.products.filter((item, index) => index !== id)});
    }

    handleSubmit() {
        if (this.state.newItem.name.length > 0 && this.state.newItem.amount > 0){
            let singleProduct = {
                name: this.state.newItem.name,
                amount: this.state.newItem.amount
            }
            this.setState({
                products: [...this.state.products, singleProduct],
                newItem: { name: "", amount: 0 }
            });
        }
    }

    render(){
        return(
            <div>

                <h1>Products</h1>
                <button onClick={this.toggleInputs} id="enter-new-product-button">Enter New Product</button>
                
                <div id="add-product-container">
                    <div id="inputs-container" onSubmit={this.handleSubmit}>
                        <input 
                            onChange={this.handleName} 
                            value={this.state.newItem.name} 
                            className="product-input" 
                            type="text" 
                        />
                        <button onClick={this.minusNewItem} className="plus-minus-buttons" id="minus">-</button>
                        <input 
                            onChange={this.handleAmount} 
                            value={this.state.newItem.amount}
                            className="amount-input"
                            type="text"
                            readOnly
                        />
                        <button onClick={this.plusNewItem} className="plus-minus-buttons" id="plus">+</button>

                        <button onClick={this.handleSubmit} id="submit-button">Add New Product</button>
                    </div>
                </div>

                {
                    this.state.products.map((item, index) => {
                        return(
                            <div className="product-item" key={index}>
                                <input className="product-input" readOnly value={this.state.products[index].name} type="text" />
                                <button className="plus-minus-buttons" id="minus" onClick={() => this.minus(index)}>-</button>
                                <input className="amount-input" readOnly value={this.state.products[index].amount} type="text" />
                                <button className="plus-minus-buttons" id="plus" onClick={() => this.plus(index)}>+</button>
                                <button className="delete-button" onClick={() => this.delete(index)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}