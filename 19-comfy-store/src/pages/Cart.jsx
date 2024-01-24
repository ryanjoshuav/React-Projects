import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { selectNumItemsInCart } from "../features/cart/cartSlice.js";
import { Link } from "react-router-dom";
import { selectUser } from "../features/user/userSlice.js";

const Cart = () => {
  const user = useSelector(selectUser);
  const numItemsInCart = useSelector(selectNumItemsInCart);

  return numItemsInCart === 0 ? (
    <SectionTitle text="Your cart is empty" />
  ) : (
    <>
      <SectionTitle text="Shopping Cart" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        {/* Cart Totals */}
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
