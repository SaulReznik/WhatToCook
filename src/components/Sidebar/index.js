import React from 'react';
//import "../styles/Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div id="sidebar">
        <h1>Sidebar</h1>
        <div id="links">
            <div className="link-container">
                <Link to='/'>What To Cook</Link>
            </div>
            <div className="link-container">
                <Link to='/products'>Products</Link>
            </div>
            <div className="link-container">
                <Link to='/recipes'>Recipes</Link>
            </div>
        </div>
    </div>
)

export default Sidebar;