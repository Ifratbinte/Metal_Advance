import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  console.log("submenus", submenus);
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus &&
        submenus.map((submenu: any, i: number) => {
          return (
            <MenuItems items={submenu} key={i} depthLevel={depthLevel} />
            // <li key={i} className="submenu-items cursor-pointer">
            //   <NavLink className="submenu-links fs-18 text-dark" to={submenu.url}>
            //     {submenu.title}
            //   </NavLink>
            // </li>
          );
        })}
    </ul>
  );
};
export default Dropdown;
