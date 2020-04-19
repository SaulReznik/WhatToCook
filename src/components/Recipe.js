import React from 'react';

class Recipe extends React.Component {
    state = {
        isOpen: false,
    }

    togglePanel = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        const { ingredients, instructions, name } = this.props;
        return (
            <li>
                <h3 onClick={this.togglePanel}>{name}</h3>
                {
                    this.state.isOpen ?
                        <>
                            <ol>
                                {ingredients.map((item, index) => (
                                    <li key={index}>{item.name} - {item.amount}</li>
                                ))}
                            </ol>
                            <p>
                                {instructions}
                            </p>
                        </>
                        : null
                }
            </li>
        )
    }
}

export default Recipe;