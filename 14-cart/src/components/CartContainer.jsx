import { useGlobalContext } from "../utils/context.jsx";
import CartItem from "./CartItem.jsx";

const CartContainer = () => {
  const { cart, totalPrice, clearCart } = useGlobalContext();
  const cartArray = [...cart.entries()];
  console.log(cartArray);

  return cartArray.length < 1 ? (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {/* *using objects */}
        {/* {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))} */}

        {/* using Map */}
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;

          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
