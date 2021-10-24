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
                <Link className={linkContainer} to='/'>What To Cook</Link>
                <Link className={linkContainer} to='/products'>Products</Link>
                <Link className={linkContainer} to='/recipes'>Recipes</Link>
            </div>
        </div>
    )
}

export default Sidebar;
