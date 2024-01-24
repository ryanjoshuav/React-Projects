import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context.jsx";
import NavLinks from "./NavLinks.jsx";

const Navbar = () => {
  const { setPageId, openSidebar } = useGlobalContext();
  const handleSubmenu = (event) => {
    if (!event.target.classList.contains("nav-link")) setPageId(null);
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Stripe</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
