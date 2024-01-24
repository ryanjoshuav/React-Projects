import { useState } from "react";
import Form from "./Form.jsx";
import ColorsList from "./ColorList.jsx";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorsList colors={colors} />
      <ToastContainer position="top-right" autoClose={1000} />
    </main>
  );
};
export default App;
