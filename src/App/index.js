import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// import "./App.css";
import useStyles from './styles';

import Sidebar from "../components/Sidebar";

//Routes
import WhatToCook from '../pages/WhatToCook';
import Products from '../pages/Products';
import Recipes from '../pages/Recipes';

const App = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.App}>
            <BrowserRouter>
                <Sidebar />
                <div className={classes.body}>
                    <h1>Body</h1>
                    <Route exact path="/" component={WhatToCook} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/recipes" component={Recipes} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;