// TODO: change the action type to more concrete type after refactoring the "CHANGE_PRODUCT_AMOUNT" reducer
export const products = (state = [], action: Record<string, any>) => {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return [
        ...state,
        action.product,
      ];
    case 'CHANGE_PRODUCT_AMOUNT':
      const { amount, index } = action.payload;
      return state.map((product, i) => (
        i === index
          ? { ...(product as Record<string, string>), amount }
          : product
      ));
    case 'DELETE_PRODUCT':
      return state.filter((product, i) => i !== action.index);
    default:
      return state;
  }
};
