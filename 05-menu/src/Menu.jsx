const Menu = ({ menuItems }) => {
  const content = (
    <div className="section-center">
      {menuItems.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className="menu-item" key={id}>
            <div className="item-info">
              <header>
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
                <span className="item-price">${price}</span>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
  return content;
};
export default Menu;
