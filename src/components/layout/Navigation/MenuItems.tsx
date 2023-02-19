import LinkComponent from "#components/common/LinkComponent";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }: any) => {
  const location = useLocation();

  const [dropdown, setDropdown] = useState<boolean>(false);

  // close dropdown on outside click
  let ref = useRef(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (dropdown && ref.current && !(ref.current as any)?.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  // open dropdown on hover
  const onMouseEnter = () => {
    window.innerWidth > 1200 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 1200 && setDropdown(false);
  };

  return (
    <li
      className={`menu-items position-relative text-white fs-16 ${items.url.split("/")[1] === location.pathname.split("/")[1] ? "active" : ""}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            className="menu-links border-0 cursor-pointer bg-transparent w-100 fs-16"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&darr;</span>
            ) : (
              <span className="arrow">
                <FaAngleDown />
              </span>
            )}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
        </>
      ) : (
        <LinkComponent url={items.url} className="menu-links d-block fw-medium">
          {items.title}
        </LinkComponent>
      )}
    </li>
  );
};
export default MenuItems;
