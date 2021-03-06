import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "../../styles/Products.css";
import { restrictedChars } from '../../constants';
import actions from '../../store/actions';

// ---------------- Actions ------------------ //
const { 
    addNewProduct,
    changeProductAmount,
    deleteProduct
} = actions.products;

const Products = () => {
    const [ keyCode, setKeyCode ] = useState(null);
    const [ isAddProductOpen, setIsAddProductOpen ] = useState(false);
    const [ newItem, setNewItem ] = useState({
        name: '',
        amount: '0'
    });

    // ----------------- Store ---------------- //
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    // -------------- General hendlers ----------//
    const keyDown = e => setKeyCode(e.keyCode);

    // ------------------ Add Product --------------------//
    const toggleInputs = () => setIsAddProductOpen(!isAddProductOpen);

    const onNewItemNameChange = e => setNewItem({ ...newItem, name: e.target.value });

    const onNewItemAmountChange = e => {
        if (restrictedChars.includes(keyCode)) return;

        //This helps us to avoid 'e', 'first number 0' and max character problems 
        const val = `${parseFloat(+e.target.value)}`.slice(0, 4);

        setNewItem({ ...newItem, amount: val });
    };

    const handleSubmit = () => { 
        dispatch(addNewProduct(newItem));

        setNewItem({ name: "", amount: 0 });
    };

    // ----------------- Products List ----------------------//
    const onAmountChange = (e, index) => {
        if(restrictedChars.includes(keyCode)) return;
        
        const payload = { e, index };

        dispatch(changeProductAmount(payload));
    };

    return(
        <div>
            <h1>Products</h1>
            <button onClick={toggleInputs} id="enter-new-product-button">Enter New Product</button>
            {
                isAddProductOpen ? 
                <div id="add-product-container">
                    <div id="inputs-container">
                        <input
                            onChange={onNewItemNameChange}
                            value={newItem.name}
                            className="product-input"
                            type="text"
                        />
                        <input
                            onChange={onNewItemAmountChange}
                            onKeyDown={keyDown}
                            value={newItem.amount}
                            className="amount-input"
                            type="number"
                        />
                        <button onClick={handleSubmit} id="submit-button">Add New Product</button>
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
                                onKeyDown={keyDown}
                                value={products[index].amount} 
                                type="number" 
                            />
                            <button 
                                className="delete-button"
                                onClick={() => dispatch(deleteProduct(index))}
                            >
                                Delete
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Products;