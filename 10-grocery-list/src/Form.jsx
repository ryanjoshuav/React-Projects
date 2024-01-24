import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem, isEditing, editItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please input a proper value");
      return;
    }

    if (!isEditing) addItem(newItemName);
    if (isEditing) editItem(newItemName);

    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          placeholder="e.g. Eggs..."
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          {isEditing ? "edit item" : "add item"}
        </button>
      </div>
    </form>
  );
};
export default Form;
