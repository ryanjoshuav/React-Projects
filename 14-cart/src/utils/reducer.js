import { ACTIONS } from "./actions.js";

const {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  GET_TOTALS,
} = ACTIONS;

const reducer = (state, action) => {
  let newCart;
  let itemId;
  let item;
  let updatedItem;

  switch (action.type) {
    case CLEAR_CART:
      //*using objects
      // return { ...state, cart: [] };

      //*using Map
      return { ...state, cart: new Map() };

    case REMOVE:
      //*using objects
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== action.payload.id),
      // };

      //*using Map
      newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };

    case INCREASE:
      // *using object
      // return {
      //   ...state,
      //   cart: state.cart.map((item) => {
      //     return item.id === action.payload.id
      //       ? { ...item, amount: item.amount + 1 }
      //       : item;
      //   }),
      // };

      // *using Map
      newCart = new Map(state.cart);
      itemId = action.payload.id;
      item = newCart.get(itemId);
      updatedItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, updatedItem);
      return { ...state, cart: newCart };

    case DECREASE:
      //*using object
      // newCart = state.cart
      //   .map((item) => {
      //     return action.payload.id === item.id
      //       ? { ...item, amount: item.amount - 1 }
      //       : item;
      //   })
      //   .filter((item) => item.amount !== 0);
      // return {
      //   ...state,
      //   cart: newCart,
      // };

      //*using Map
      newCart = new Map(state.cart);
      itemId = action.payload.id;
      item = newCart.get(itemId);
      if (item.amount === 1) {
        newCart.delete(itemId);
        return { ...state, cart: newCart };
      }
      updatedItem = { ...item, amount: item.amount - 1 };
      newCart.set(itemId, updatedItem);
      return { ...state, cart: newCart };

    case GET_TOTALS:
      // const { totalPrice, totalAmount } = state.cart.reduce(
      //   (totals, item) => {
      //     totals.totalAmount += item.amount;
      //     totals.totalPrice += item.price * item.amount;

      //     return totals;
      //   },
      //   { totalPrice: 0, totalAmount: 0 }
      // );
      //* using Map

      let totalPrice = 0;
      let totalAmount = 0;
      for (let { amount, price } of state.cart.values()) {
        totalAmount += amount;
        totalPrice += amount * price;
      }

      return {
        ...state,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
      };

    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      //*using objects
      // return { ...state, cart: action.payload.cart, loading: false };

      //*using Maps
      newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
      return { ...state, cart: newCart, loading: false };

    default:
      throw "no matching action type";
  }
};

export default reducer;
