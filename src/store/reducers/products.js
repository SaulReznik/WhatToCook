export const products = ( state = [], action ) => {
    switch (action.type) {
        case 'ADD_NEW_PRODUCT':
            return [
                ...state,
                action.product
            ]
        default: 
            return state;
    }
}