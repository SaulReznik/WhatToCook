import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

export default class App extends React.Component{
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
                name: "Grechka",
                amount: 5
            },
            {
                name: "ZT",
                amount: 5
            }
        ]
    };

    handleName = (e) => {
        this.setState({ newItem: { ...this.state.newItem, name: e.target.value } })
    }

    handleAmount = (e) => {
        const regex = /^[0-9\b]+$/;

        if (regex.test(e.target.value)) {
            this.setState({ newItem: { ...this.state.newItem, amount: e.target.value } })
        }

    }

    minusNewItem = () => {
        if (this.state.newItem.amount > 0) {
            this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount - 1 } });
        }
    }

    plusNewItem = () => {
        this.setState({ newItem: { ...this.state.newItem, amount: this.state.newItem.amount + 1 } })
    }

    minus = (index) => {
        const { products } = this.state;

        if (products[index].amount > 0) {
            const before = products.filter((item, indx) => indx < index);
            const after = products.filter((item, indx) => indx > index);

            this.setState({
                products: [
                    ...before,
                    {
                        name: products[index].name,
                        amount: products[index].amount - 1
                    },
                    ...after
                ]
            })
        }
    }

    plus = (index) => {
        const { products } = this.state;
        const before = products.filter((item, indx) => indx < index);
        const after = products.filter((item, indx) => indx > index);

        this.setState({
            products: [
                ...before,
                {
                    name: products[index].name,
                    amount: products[index].amount + 1
                },
                ...after
            ]
        })
    }

    deleteItem = (id) => {
        this.setState({ products: this.state.products.filter((item, index) => index !== id) });
    }

    handleSubmit = () => {
        if (this.state.newItem.name.length > 0 && this.state.newItem.amount > 0) {
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
            <div className="App">
                <Sidebar />
                <Body 
                    state={this.state}
                    handleName={this.handleName}
                    handleAmount={this.handleAmount}
                    handleSubmit={this.handleSubmit}
                    plusNewItem={this.plusNewItem}
                    minusNewItem={this.minusNewItem}
                    plus={this.plus}
                    minus={this.minus}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}