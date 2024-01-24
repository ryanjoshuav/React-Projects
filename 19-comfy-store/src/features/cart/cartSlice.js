import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) ?? defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      //adding to cartItems array
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      //totals
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart");
    },

    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;

      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      //totals
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);

      toast.error("Item removed to cart");
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload;

      const product = state.cartItems.find((item) => item.cartID === cartID);

      //totals
      state.numItemsInCart += amount - product.amount;
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Cart updated");
    },

    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export const selectNumItemsInCart = (state) => state.cart.numItemsInCart;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
