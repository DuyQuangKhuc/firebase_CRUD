/* eslint-disable no-duplicate-case */
export const actionType = {
    SET_USER: 'SET_USER',
    SET_ITEMS: 'SET_ITEMS',
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",
    SET_SHOW_ITEMS: "SET_SHOW_ITEMS",
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_ITEMS:
            return {
                ...state,
                Items: action.Items,
            };

        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };

        case actionType.SET_CARTITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };

        case actionType.SET_SHOW_ITEMS:
            return {
                ...state,
                cartShowItem: action.cartShowItem,
            };

        default:
            return state;
    }
};

export default reducer;