import React from 'react';
import '../styles/Body.css';
import { Route } from 'react-router-dom';

import Products from './routes/Products';
import Recepies from './routes/Recepies';

export default class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <h1>Body</h1>
                <Route path="/products" component={Products} />
                <Route path="/recepies" component={Recepies} />
            </div>
        )
    }
}