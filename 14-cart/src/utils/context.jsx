import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer.js";
import cartItems from "./data.jsx";
import { ACTIONS } from "./actions.js";
// import { getTotals } from "./getTotals.js";

const url = "https://course-api.com/react-useReducer-cart-project";
const {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  GET_TOTALS,
} = ACTIONS;
const AppContext = createContext();

const initialState = {
  loading: true,
  // cart: new Map(cartItems.map((item) => [item.id, item])),
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { totalPrice, totalAmount } = getTotals(state.cart);

  const clearCart = () => dispatch({ type: CLEAR_CART });
  const removeItem = (id) => dispatch({ type: REMOVE, payload: { id } });
  const increaseAmount = (id) => dispatch({ type: INCREASE, payload: { id } });
  const decreaseAmount = (id) => dispatch({ type: DECREASE, payload: { id } });

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING });
      const resp = await fetch(url);
      const cart = await resp.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        // totalAmount,
        // totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
