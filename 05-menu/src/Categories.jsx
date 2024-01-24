const Categories = ({ categories, filterByCategory }) => {
  const content = (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="btn"
          onClick={() => filterByCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
  return content;
};
export default Categories;
