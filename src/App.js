import React from "react";
import { BrowserRouter } from 'react-router-dom';

import "./App.css";

import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

//keycodes of restricted characters for all our amount inputs
const restrictedChars = [43, 45, 69, 107, 109, 187, 188, 189, 190];

export default class App extends React.Component{
    state = {
        newItem: {
            name: "",
            amount: '0'
        },
        products: [
            {
                name: "Potato",
                amount: '5'
            },
            {
                name: "tomato",
                amount: '5'
            },
            {
                name: "Sour Milk",
                amount: '5'
            }
        ],
        keyCode: null,                     //Here we defining the last pressed keycode of active input

        recipes: [
            {
                name: 'Mashed potatoes',
                ingredients: [
                    {
                        name: 'Potato',
                        amount: '5',
                    },
                    {
                        name: 'butter',
                        amount: '200',
                    },
                    {
                        name: 'salt',
                        amount: '15'
                    }
                ],
                instructions: 'Some Text',
            }
        ]
    };

    handleNewItemName = e => this.setState({ newItem: { ...this.state.newItem, name: e.target.value } })
    
    onNewItemAmountChange = e => {
        const { keyCode } = this.state;

        if (restrictedChars.includes(keyCode)) return;

        //This helps us to avoid 'e', 'first number 0' and max character problems 
        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        this.setState(prevstate => ({
            newItem: {          
                ...prevstate.newItem,
                amount: val,
            }
        }));
    }

    onAmountChange = (e, index) => {
        const { products, keyCode } = this.state;

        if(restrictedChars.includes(keyCode)) return;
        
        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);
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

    keyDown = e => this.setState({keyCode: e.keyCode})

    deleteItem = id => this.setState({ products: this.state.products.filter((item, index) => index !== id) })

    handleSubmit = () => {
        const { newItem, products } = this.state;

        if (newItem.name.length) {
            let singleProduct = {
                name: newItem.name,
                amount: newItem.amount
            }
            this.setState({
                products: [...products, singleProduct],
                newItem: { name: "", amount: 0 }
            });
        }
    }

    render(){
        const { newItem, products, recipes } = this.state;
        return(
            <div className="App">
                <BrowserRouter>
                    <Sidebar />
                    <Body 
                        newItem={newItem}
                        products={products}
                        recipes={recipes}
                        handleNewItemName={this.handleNewItemName}
                        onNewItemAmountChange={this.onNewItemAmountChange}
                        handleSubmit={this.handleSubmit}
                        plusNewItem={this.plusNewItem}
                        minusNewItem={this.minusNewItem}
                        plus={this.plus}
                        minus={this.minus}
                        onAmountChange={this.onAmountChange}
                        keyDown={this.keyDown}
                        deleteItem={this.deleteItem}
                    />
                </BrowserRouter>
            </div>
        );
    }
}