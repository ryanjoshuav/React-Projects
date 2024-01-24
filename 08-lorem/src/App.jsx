import { useState } from "react";
import data from "./data.js";

const App = () => {
  const [paragraphCount, setParagraphCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setText(data.slice(0, paragraphCount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph/s:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={9}
          step={1}
          value={paragraphCount}
          onChange={(e) => setParagraphCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
