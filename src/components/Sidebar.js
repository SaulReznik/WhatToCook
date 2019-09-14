import React from 'react';
import "../styles/Sidebar.css";
import { Link} from 'react-router-dom';

import Products from './routes/Products';
import Recepies from './routes/Recepies';

export default class Sidebar extends React.Component{
    render(){
        return(
            <div id="sidebar">
                <h1>Sidebar</h1>
                <div id="links">
                    <div className="link-container">
                        <Link to={'/products'}>Products</Link>
                    </div>
                    <div className="link-container">
                        <Link to={'/recepies'}>Recepies</Link>
                    </div>
                </div>
            </div>
        )
    }
}