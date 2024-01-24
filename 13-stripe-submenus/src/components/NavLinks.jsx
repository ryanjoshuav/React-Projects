import { useGlobalContext } from "../context/context.jsx";
import sublinks from "../context/data.jsx";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => (
        <button
          key={link.pageId}
          className="nav-link"
          onMouseEnter={() => setPageId(link.pageId)}
        >
          {link.page}
        </button>
      ))}
    </div>
  );
};
export default NavLinks;
