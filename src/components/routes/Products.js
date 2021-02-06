import React from 'react';
import { connect } from 'react-redux';

import "../../styles/Products.css";
import { restrictedChars } from '../../constants';
import actions from '../../store/actions';
class Products extends React.Component{
    state = {
        keyCode: null,
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
        const { addNewProduct } = this.props; 
        addNewProduct(this.state.newItem);

        this.setState({ 
            newItem: { name: "", amount: 0 }
        });
    }

    keyDown = e => this.setState({keyCode: e.keyCode})

    onAmountChange = (e, index) => {
        const { keyCode } = this.state;
        const { changeProductAmount } = this.props;

        if(restrictedChars.includes(keyCode)) return;
        
        const payload = { e, index };

        changeProductAmount(payload);
    }

    render(){
        const { 
            products,
            deleteProduct
        } = this.props;

        console.log(this.props);

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
                                onKeyDown={(e) => this.keyDown(e)}
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
                                    onChange={(e) => this.onAmountChange(e, index)} 
                                    onKeyDown={(e) => this.keyDown(e)}
                                    value={products[index].amount} 
                                    type="number" 
                                />
                                <button className="delete-button" onClick={() => deleteProduct(index)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
};

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => {
    const { 
        addNewProduct: addNewProductAction,
        changeProductAmount: changeProductAmountAction,
        deleteProduct: deleteProductAction
    } = actions;

    return ({
        addNewProduct: product => dispatch(addNewProductAction(product)),
        changeProductAmount: payload => dispatch(changeProductAmountAction(payload)),
        deleteProduct: index => dispatch(deleteProductAction(index))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);