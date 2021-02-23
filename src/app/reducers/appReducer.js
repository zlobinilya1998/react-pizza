import types from "../types";

let initialState = {
  cart: [],
};

let appReducer = (state = initialState, action) => {
  let stateCopy = { ...state, cart: [...state.cart] };
  switch (action.type) {
    case types.ADD_ITEM:
      stateCopy.cart.push({ ...action.payload });
      return stateCopy;
    case types.DELETE_ITEM:
      stateCopy.cart.splice(action.payload, 1);
      return stateCopy;
    case types.INC_QTY:
      if (stateCopy.cart[action.payload].qty < 10) {
        stateCopy.cart[action.payload].qty++;
      }
      return stateCopy;
    case types.DEC_QTY:
      if (stateCopy.cart[action.payload].qty > 1) {
        stateCopy.cart[action.payload].qty--;
      }
      return stateCopy;
    case types.CLEAR_BASKET:
      stateCopy.cart = [];
      return stateCopy;
    default:
      return stateCopy;
  }
};

export let addItemActionCreator = (payload) => ({
  type: types.ADD_ITEM,
  payload,
});
export let deleteItemActionCreator = (payload) => ({
  type: types.DELETE_ITEM,
  payload,
});
export let incrementQtyActionCreator = (payload) => ({
  type: types.INC_QTY,
  payload,
});
export let decrementQtyActionCreator = (payload) => ({
  type: types.DEC_QTY,
  payload,
});
export let clearBasketActionCreator = () => ({
  type: types.CLEAR_BASKET,
});
export default appReducer;
