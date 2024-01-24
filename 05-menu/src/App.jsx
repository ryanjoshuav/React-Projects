import { useState } from "react";
import data from "./data.js";
import Categories from "./Categories.jsx";
import Menu from "./Menu.jsx";

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(menu.map((item) => item.category).sort()),
  ]);

  const filterByCategory = (category) => {
    const temp =
      category === "all"
        ? data
        : data.filter((item) => item.category === category);
    setMenu(temp);
  };

  const content = (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <Categories
          categories={categories}
          filterByCategory={filterByCategory}
        />
        <Menu menuItems={menu} />
      </section>
    </main>
  );
  return content;
};
export default App;
