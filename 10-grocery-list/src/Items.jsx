import SingleItem from "./SingleItem.jsx";

const Items = ({
  list,
  removeItem,
  toggleCheckBox,
  clearList,
  startEditing,
}) => {
  return (
    <div className="items">
      {list.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleCheckBox={toggleCheckBox}
            startEditing={startEditing}
          />
        );
      })}
      {list.length > 0 && (
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      )}
    </div>
  );
};
export default Items;
