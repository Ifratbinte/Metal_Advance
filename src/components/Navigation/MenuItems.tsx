import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(true);
  };

  return (
    <li className="menu-items position-relative text-white fs-14">
      {items.submenu ? (
        <>
          <button
            className="menu-unlink d-flex align-items-center border-0 cursor-pointer bg-transparent text-white w-100 fs-18"
            onClick={() => handleDropdown()}
          >
            {items.title}
          </button>
          {isOpen && <Dropdown submenus={items.submenu} />}
        </>
      ) : (
        <NavLink className="menu-links d-block fs-18 text-white" to={items.url}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};
export default MenuItems;
