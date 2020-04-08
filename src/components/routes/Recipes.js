import React from 'react';

import Recipe from '../Recipe';

class Recipes extends React.Component{
    state = {
        isOpen: false,
    }

    togglePanel = (e) => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        const { recipes } = this.props;
        return (
            <div className="recipes">
                <h1>Recipes</h1>

                <ol>
                    {
                        recipes.map((item, index) => {
                            <li key={index} onClick={(e) => this.togglePanel(e)}>
                                <h1>{item.name}</h1>
                                {this.state.isOpen ? 
                                <Recipe 
                                    ingredients={item.ingredients}
                                    instructions={item.instructions}
                                /> 
                                : null}
                            </li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Recipes;