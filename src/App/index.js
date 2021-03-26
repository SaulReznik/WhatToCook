import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import useStyles from './styles';

import Sidebar from "../components/Sidebar";

//Routes
import WhatToCook from '../pages/WhatToCook';
import Products from '../pages/Products';
import Recipes from '../pages/Recipes';

const App = () => {
    // ----------------- styles ----------------- //
    const classes = useStyles();
    const { app, body } = classes;

    return (
        <div className={app}>
            <BrowserRouter>
                <Sidebar />
                <div className={body}>
                    <Route exact path="/" component={WhatToCook} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/recipes" component={Recipes} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;