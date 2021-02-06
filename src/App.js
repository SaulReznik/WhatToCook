import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import "./App.css";

import Sidebar from "./components/Sidebar";

//Routes
import WhatToCook from './components/routes/WhatToCook';
import Products from './components/routes/Products';
import Recipes from './components/routes/Recipes';

export default class App extends React.Component{
    state = {
        products: [
            {
                name: "Potato",
                amount: '5'
            },
            {name: "Butter", amount: "1000",},
            {name: "Salt", amount: "2000"},
            {name: "Egg", amount: "10"},
            {
                name: "Tomato",
                amount: '5'
            },
            {
                name: "Sour Milk",
                amount: '5'
            }
        ],   
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
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/recipes" component={Recipes} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}