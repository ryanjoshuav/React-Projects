import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice.js";
import CartItem from "./CartItem.jsx";

const CartItemsList = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </div>
  );
};
export default CartItemsList;
