import { useRef } from "react";
import { useGlobalContext } from "../context/context.jsx";
import sublinks from "../context/data.jsx";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const submenuContainerRef = useRef(null);

  const sublink = sublinks.find((sublink) => sublink.pageId === pageId);
  const handleMouseLeave = (event) => {
    const submenu = submenuContainerRef.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    console.log(clientY, bottom);

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1)
      setPageId(null);
  };
  return (
    <div
      className={sublink ? "submenu show-submenu" : "submenu"}
      ref={submenuContainerRef}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{sublink?.page}</h5>
      <div className="submenu-links">
        {sublink?.links?.map((link) => (
          <a href={link.url} key={link.id}>
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Submenu;
