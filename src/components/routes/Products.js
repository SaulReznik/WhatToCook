import React from 'react';
import { connect } from 'react-redux';

import "../../styles/Products.css";
import { restrictedChars } from '../../constants';
import actions from '../../store/actions';
class Products extends React.Component{
    state = {
        isAddProductOpen: false,
        newItem: {
            name: '',
            amount: '0'
        }
    }

    onNewItemNameChange = e => this.setState({ newItem: { ...this.state.newItem, name: e.target.value } })

    onNewItemAmountChange = e => {
        const { keyCode } = this.state;

        if (restrictedChars.includes(keyCode)) return;

        //This helps us to avoid 'e', 'first number 0' and max character problems 
        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        this.setState(prevState => ({
            newItem: {
                ...prevState.newItem,
                amount: val,
            }
        }));
    }

    toggleInputs = () => {
        const { isAddProductOpen } = this.state;
        this.setState({isAddProductOpen: !isAddProductOpen});
    }

    handleSubmit = () => {
        this.props.addProduct(this.state.newItem);

        this.setState({ 
            newItem: { name: "", amount: 0 }
        });
    }

    render(){
        const {
            products,
            deleteItem,
            onAmountChange,
            keyDown,
        } = this.props;

        const { isAddProductOpen, newItem } = this.state;

        return(
            <div>

                <h1>Products</h1>
                <button onClick={this.toggleInputs} id="enter-new-product-button">Enter New Product</button>
                
                {
                    isAddProductOpen ? 
                    <div id="add-product-container">
                        <div id="inputs-container">
                            <input
                                onChange={(e) => this.onNewItemNameChange(e)}
                                value={newItem.name}
                                className="product-input"
                                type="text"
                            />
                            <input
                                onChange={(e) => this.onNewItemAmountChange(e)}
                                onKeyDown={(e) => keyDown(e)}
                                value={newItem.amount}
                                className="amount-input"
                                type="number"
                            />
                            <button onClick={this.handleSubmit} id="submit-button">Add New Product</button>
                        </div>
                    </div> 
                    : null
                }
                

                {
                    products.map((item, index) => {
                        return(
                            <div className="product-item" key={index}>
                                <input className="product-input" readOnly value={products[index].name} type="text" />
                                <input 
                                    className="amount-input" 
                                    onChange={(e) => onAmountChange(e, index)} 
                                    onKeyDown={(e) => keyDown(e)}
                                    value={products[index].amount} 
                                    type="number" 
                                />
                                <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    const { addNewProduct } = actions;

    return ({
        addProduct: product => dispatch(addNewProduct(product))
    })
};

export default connect(null, mapDispatchToProps)(Products);