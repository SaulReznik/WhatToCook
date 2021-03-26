import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import "./Products.css";
import useStyles from './styles';

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

    // ----------------- styles --------------- //
    const classes = useStyles();
    const { 
        productsWrapper, enterNewProductBtn, addProductContainer, inputsContainer,
        productInput, amountInput, submitBtn, productItem, deleteBtn 
    } = classes;

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
        <div className={productsWrapper}>
            <h1>Products</h1>
            <button onClick={toggleInputs} className={enterNewProductBtn}>Enter New Product</button>
            {
                isAddProductOpen ? 
                <div className={addProductContainer}>
                    <div className={inputsContainer}>
                        <input
                            onChange={onNewItemNameChange}
                            value={newItem.name}
                            className={productInput}
                            type="text"
                        />
                        <input
                            onChange={onNewItemAmountChange}
                            onKeyDown={keyDown}
                            value={newItem.amount}
                            className={amountInput}
                            type="number"
                        />
                        <button onClick={handleSubmit} className={submitBtn}>Add New Product</button>
                    </div>
                </div> 
                : null
            }
            {
                products.map((item, index) => {
                    return(
                        <div className={productItem} key={index}>
                            <input className={productInput} readOnly value={products[index].name} type="text" />
                            <input 
                                className={amountInput}
                                onChange={(e) => onAmountChange(e, index)} 
                                onKeyDown={keyDown}
                                value={products[index].amount} 
                                type="number" 
                            />
                            <button 
                                className={deleteBtn}
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