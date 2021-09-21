import { IProduct, IProductAmountAction } from "store/types";

const addNewProduct = (product: IProduct) => ({
    type: 'ADD_NEW_PRODUCT',
    product
});

const changeProductAmount = (payload: IProductAmountAction) => ({
    type: 'CHANGE_PRODUCT_AMOUNT',
    payload
});

const deleteProduct = (index: string) => ({
    type: 'DELETE_PRODUCT',
    index
})

export default {
    addNewProduct,
    changeProductAmount,
    deleteProduct
}
