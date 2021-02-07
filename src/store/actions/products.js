const addNewProduct = product => ({
    type: 'ADD_NEW_PRODUCT',
    product
});

const changeProductAmount = payload => ({
    type: 'CHANGE_PRODUCT_AMOUNT',
    payload
});

const deleteProduct = index => ({
    type: 'DELETE_PRODUCT',
    index
})

export default {
    addNewProduct,
    changeProductAmount,
    deleteProduct
}
