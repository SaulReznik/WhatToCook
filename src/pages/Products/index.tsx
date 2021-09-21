import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import "./Products.css";
import useStyles from './styles';

import { restrictedChars } from '../../constants';
import actions from '../../store/actions';
import { IProduct } from 'store/types';

// ---------------- Actions ------------------ //
const {
  addNewProduct,
  changeProductAmount,
  deleteProduct
} = actions.products;

const Products = () => {
  const [keyCode, setKeyCode] = useState(0);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    amount: '0'
  });

  // ----------------- Store ---------------- //
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector((state: any) => state.products);

  // ----------------- styles --------------- //
  const classes = useStyles();
  const {
    productsWrapper, enterNewProductBtn, inputsContainer,
    productInput, amountInput, submitBtn, productItem, deleteBtn
  } = classes;

  // -------------- General hendlers ----------//
  const keyDown: React.KeyboardEventHandler = (e) => setKeyCode(e.keyCode);

  // ------------------ Add Product --------------------//
  const toggleInputs = () => setIsAddProductOpen(!isAddProductOpen);

  const onNewItemNameChange = (e: ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, name: e.target.value });

  const onNewItemAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (restrictedChars.includes(keyCode)) return;
    //This helps us to avoid 'e', 'first number 0' and max character problems 
    const val = `${parseFloat(e.target.value)}`.slice(0, 4);

    setNewItem({ ...newItem, amount: val });
  };

  const handleSubmit = () => {
    dispatch(addNewProduct(newItem));

    setNewItem({ name: "", amount: '0' });
  };

  // ----------------- Products List ----------------------//
  const onAmountChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(keyCode);
    if (restrictedChars.includes(keyCode)) return;
    console.log('here', e.target.value, index);
    const { value } = e.target;
    const payload = {
      amount: `${parseFloat(value)}`.slice(0, 4),
      index
    };

    dispatch(changeProductAmount(payload));
  };

  const onAmountBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    !e.target.value && dispatch(changeProductAmount({ amount: '0', index }));
  }

  return (
    <div className={productsWrapper}>
      <h1>Products</h1>
      <button onClick={toggleInputs} className={enterNewProductBtn}>Enter New Product</button>
      {
        isAddProductOpen ?
          <div>
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
          return (
            <div className={productItem} key={index}>
              <input className={productInput} readOnly value={products[index].name} type="text" />
              <input
                className={amountInput}
                onChange={(e) => onAmountChange(e, index)}
                onKeyDown={keyDown}
                onBlur={(e) => onAmountBlur(e, index)}
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
