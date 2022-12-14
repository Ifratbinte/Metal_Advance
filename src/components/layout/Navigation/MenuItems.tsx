import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }: any) => {
  const [dropdown, setDropdown] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const ref = useRef();

  // useOutsideClick(ref, () => {
  //   // alert("You clicked outside");
  //   if (isOpen) setIsOpen(false);
  // });

  return (
    <li className="menu-items position-relative text-white fs-14">
      {items.submenu ? (
        <>
          <button
            className="menu-links d-flex align-items-center border-0 cursor-pointer bg-transparent w-100 fs-18"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {/* {depthLevel > 0 ? <span>&darr;</span> : <span className="arrow" />} */}
          </button>
          {/* {isOpen && <Dropdown ref={ref} submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />} */}
          <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
        </>
      ) : (
        <NavLink className="menu-links d-block fs-18" to={items.url}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};
export default MenuItems;
