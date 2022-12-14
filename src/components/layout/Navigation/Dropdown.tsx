import { NavLink } from "react-router-dom";
const Dropdown = ({ submenus, dropdown }: any) => {
  console.log("submenus", submenus);
  
  return (
    <ul className={`dropdown dropdown-submenu ${dropdown ? "show" : ""}`}>
      {submenus &&
        submenus.map((submenu: any, i: number) => {
          return (
            <li key={i} className="submenu-items cursor-pointer">
              <NavLink className="submenu-links fs-18 text-dark" to={submenu.url}>
                {submenu.title}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
export default Dropdown;
