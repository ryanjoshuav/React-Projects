import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../utils/context.jsx";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>

        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>

      <div>
        {/* amount buttons */}
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <FaChevronUp />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
