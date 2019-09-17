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
            products: [
                
            ]
        }

        this.toggleInputs = this.toggleInputs.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ newItem: { ...this.state.newItem, amount: e.target.value } })
    }

    minus() {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount - 1}})
    }

    plus() {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount + 1}})
    }

    handleSubmit() {
        let singleProduct = {
            name: this.state.newItem.name,
            amount: this.state.newItem.amount
        }
        this.setState({
            products: [...this.state.products, singleProduct],
            newItem: { name: "", amount: 0 }
        });
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
                            id="new-product-input" 
                            type="text" 
                        />
                        <button onClick={this.minus} className="plus-minus-buttons" id="minus">-</button>
                        <input 
                            onChange={this.handleAmount} 
                            value={this.state.newItem.amount} 
                            type="number" 
                        />
                        <button onClick={this.plus} className="plus-minus-buttons" id="plus">+</button>

                        <button onClick={this.handleSubmit} id="submit-button">Add New Product</button>
                    </div>
                </div>

                {
                    this.state.products.map((item, index) => {
                        return(
                            <div key={index} className="inputs-container">
                                <input readOnly value={this.state.products[index].name} className="new-product-inputs" type="text" />
                                <div className="inputs-amount-container">
                                    <button className="subtraction-button">-</button>
                                    <input readOnly value={this.state.products[index].amount} className="amount-input" type="number" />
                                    <button className="addition-button">+</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}