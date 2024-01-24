import { FaEdit, FaTrash } from "react-icons/fa";

const SingleItem = ({ item, removeItem, toggleCheckBox, startEditing }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleCheckBox(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>

      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => startEditing(item.id)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default SingleItem;
