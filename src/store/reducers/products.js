export const products = ( state = [], action ) => {
    switch (action.type) {
        case 'ADD_NEW_PRODUCT':
            return [
                ...state,
                action.product
            ];
        case 'CHANGE_PRODUCT_AMOUNT':
            const { e, index } = action.payload;
            const val = `${parseFloat(+e.target.value)}`.slice(0, 4);
            const before = state.filter((item, indx) => indx < index);
            const after = state.filter((item, indx) => indx > index);

            return [
                ...before,
                {
                    ...state[index],
                    amount: val
                },
                ...after
            ]
        default: 
            return state;
    }
}