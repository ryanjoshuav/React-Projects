import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Items from "./Items.jsx";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const addToLocalStorage = (list) => {
  localStorage.setItem("groceryList", JSON.stringify(list));
};

const defaultList = JSON.parse(localStorage.getItem("groceryList")) ?? [];

const App = () => {
  const [list, setList] = useState(defaultList);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const addItem = (itemName) => {
    setList((prevList) => {
      const newItem = { name: itemName, id: nanoid(), completed: false };
      return [...prevList, newItem];
    });
    displayAlert(`added ${itemName} to list`);
  };

  const editItem = (itemName) => {
    const editedList = list.map((item) => {
      if (item.id === editItemId) {
        displayAlert(`successfully edited ${item.name} to ${itemName}`);
        return { ...item, name: itemName };
      }
      return item;
    });
    setList(editedList);

    setIsEditing(false);
    setEditItemId(null);
  };

  const startEditing = (id) => {
    setIsEditing(true);
    setEditItemId(id);
  };

  const toggleCheckBox = (id) => {
    const editedList = list.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setList(editedList);
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => {
      if (item.id === id) displayAlert(`removed ${item.name} from list`);
      return item.id !== id;
    });
    setList(newList);
  };

  const clearList = () => {
    setList([]);
    displayAlert("cleared grocery list");
  };

  const displayAlert = (message) => {
    toast.success(message);
  };

  useEffect(() => {
    addToLocalStorage(list);
  }, [list]);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={1000} />
      <Form addItem={addItem} isEditing={isEditing} editItem={editItem} />
      <Items
        list={list}
        toggleCheckBox={toggleCheckBox}
        removeItem={removeItem}
        clearList={clearList}
        startEditing={startEditing}
      />
    </section>
  );
};
export default App;
