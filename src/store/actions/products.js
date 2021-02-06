export const addNewProduct = product => ({
    type: 'ADD_NEW_PRODUCT',
    product
});

export const changeProductAmount = payload => ({
    type: 'CHANGE_PRODUCT_AMOUNT',
    payload
});

export const deleteProduct = index => ({
    type: 'DELETE_PRODUCT',
    index
})

