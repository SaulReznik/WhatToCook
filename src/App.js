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
        recepies: [
            {
                name: 'Mashed potatoes',
                products: [
                    {
                        name: 'Potato',
                        amount: 5,
                    },
                    {
                        name: 'butter',
                        amount: 200,
                    },
                    {
                        name: 'salt',
                        amount: 15
                    }
                ]
            }
        ],
        products: [
            {
                name: "Potato",
                amount: 5
            },
            {
                name: "tomato",
                amount: 5
            },
            {
                name: "Sour Milk",
                amount: 5
            }
        ],
        keyCode: null,
    };

    handleName = (e) => {
        this.setState({ newItem: { ...this.state.newItem, name: e.target.value } })
    }

    handleAmount = (e) => {

        const { keyCode } = this.state;

        const restrictedChars = [43, 45, 69, 107, 109, 187, 188, 189, 190];

        if (restrictedChars.includes(keyCode)) return;

        const val = e.target.value.slice(0, 4);

        this.setState(prevstate => ({
            newItem: {          
                ...prevstate.newItem,
                amount: val,
            }
        }))

        // const regex = /^[0-9\b]+$/;

        // if (regex.test(e.target.value)) {
        //     this.setState({ newItem: { ...this.state.newItem, amount: e.target.value } })
        // }

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

    onAmountChange = (e, index) => {
    const { products, keyCode } = this.state;

    const restrictedChars = [43, 45, 69, 107, 109, 187, 188, 189, 190];

    if(restrictedChars.includes(keyCode)) return;
    
    const val = e.target.value.slice(0, 4);
    
    const before = products.filter((item, indx) => indx < index);
    const after = products.filter((item, indx) => indx > index);

    this.setState(prevstate => ({
        products: [
            ...before,
            {
                ...prevstate.products[index],
                amount: val,
            },
            ...after
        ]
    }))
    }

    keyDown = e => {
        this.setState({keyCode: e.keyCode})
    }

    blur = (e, index) => {
        const { products } = this.state;

        if(!e.target.value){
            const before = products.filter((item, indx) => indx < index);
            const after = products.filter((item, indx) => indx > index);

            this.setState(prevstate => ({
                products: [
                    ...before,
                    {
                        ...prevstate.products[index],
                        amount: 0,
                    },
                    ...after
                ]
            }))
        }
    }

    deleteItem = id => {
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
                    onAmountChange={this.onAmountChange}
                    keyDown={this.keyDown}
                    deleteItem={this.deleteItem}
                    blur={this.blur}
                />
            </div>
        );
    }
}