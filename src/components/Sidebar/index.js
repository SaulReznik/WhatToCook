import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Sidebar = () => {
    // ----------------- styles --------------- //
    const classes = useStyles();
    const { sidebar, links, linkContainer } = classes;

    return (
        <div className={sidebar}>
            <h1>Sidebar</h1>
            <div className={links}>
                <Link to='/' className={linkContainer}>
                    What To Cook
                </Link>
                <Link to='/products' className={linkContainer}>
                    Products
                </Link>
                <Link to='/recipes' className={linkContainer}>
                    Recipes
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;