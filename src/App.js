import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import "./App.css";

import Sidebar from "./components/Sidebar";
//Routes
import WhatToCook from './components/routes/WhatToCook';
import Products from './components/routes/Products';
import Recipes from './components/routes/Recipes';

//keycodes of restricted characters for all our amount inputs
// const restrictedChars = [43, 45, 69, 107, 109, 187, 188, 189, 190];

export default class App extends React.Component{
    state = {
        products: [
            {
                name: "Potato",
                amount: '5'
            },
            {name: "Butter", amount: "1000",},
            {name: "Salt", amount: "2000"},
            //{name: "Egg", amount: "10"},
            {
                name: "Tomato",
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
                        name: 'Butter',
                        amount: '30',
                    },
                    {
                        name: 'Salt',
                        amount: '15'
                    }
                ],
                instructions: 'Some Text',
            },
            {
                name: 'Tomato Omlet',
                ingredients: [
                    {name: "Tomato",amount: "1",},
                    {name: "Egg", amount: "1"},
                    {name: "Salt", amount: "10"},
                    {name: "Butter", amount: "40"}
                ],
                instructions: "Some text",
            },
            {
                name: 'a',
                ingredients: [
                    { name: "Tomato", amount: "1", },
                    { name: "Egg", amount: "1" },
                    { name: "Salt", amount: "10" },
                    { name: "Butter", amount: "40" }
                ],
                instructions: "Some text",
            }
        ]
    };

    onAmountChange = (e, index) => {
        const { products, keyCode } = this.state;

        if(restrictedChars.includes(keyCode)) return;
        
        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);
        const before = products.filter((item, indx) => indx < index);
        const after = products.filter((item, indx) => indx > index);

        this.setState(prevState => ({
            products: [
                ...before,
                {
                    ...prevState.products[index],
                    amount: val,
                },
                ...after
            ]
        }))
    }

    addNewRecipe = recipe => {
        this.setState(prevState => ({
            ...prevState,
            recipes: [
                ...prevState.recipes,
                recipe,
            ]
        }))
    }

    keyDown = e => this.setState({keyCode: e.keyCode})

    deleteItem = id => this.setState({ products: this.state.products.filter((item, index) => index !== id) })

    // handleSubmit = () => {
    //     const { newItem, products } = this.state;

    //     if (newItem.name.length) {
    //         let singleProduct = {
    //             name: newItem.name,
    //             amount: newItem.amount
    //         }
    //         this.setState({
    //             products: [...products, singleProduct],
    //             newItem: { name: "", amount: 0 }
    //         });
    //     }
    // }

    render(){
        const { products, recipes } = this.state;
        return(
            <div className="App">
                <BrowserRouter>
                    <Sidebar />
                    <div className="body">
                        <h1>Body</h1>
                        <Route exact path="/" render={props => (
                            <WhatToCook 
                                {...props}
                                recipes={recipes}
                                products={products}
                            />)}
                        />
                        <Route exact path="/products" render={props => (
                            <Products
                                {...props}
                                products={products}
                                deleteItem={this.deleteItem}
                                onAmountChange={this.onAmountChange}
                                keyDown={this.keyDown}
                            />)}
                        />
                        <Route exact path="/recipes" render={props => (
                            <Recipes
                                {...props}
                                recipes={recipes}
                                addNewRecipe={this.addNewRecipe}
                                restrictedChars={restrictedChars}
                            />)}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}