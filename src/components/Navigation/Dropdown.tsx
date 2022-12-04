import { NavLink } from "react-router-dom";
const Dropdown = ({ submenus }: any) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu: any, i: number) => {
        return (
          <li key={i} className="menu-items">
            <NavLink className="menu-links" to={submenu.url}>
              {submenu.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Dropdown;
