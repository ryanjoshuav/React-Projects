import { useState } from "react";
import List from "./List.jsx";
import data from "./data/data.js";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={clearPeople}>clear all</button>
      </section>
    </main>
  );
};
export default App;
