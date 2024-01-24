import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectNumItemsInCart,
} from "../features/cart/cartSlice.js";
import { SectionTitle, CheckoutForm, CartTotals } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
  const user = store.getState().user.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartItem = useSelector(selectCartItems);

  return cartItem.length === 0 ? (
    <SectionTitle text="Your cart is empty" />
  ) : (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
