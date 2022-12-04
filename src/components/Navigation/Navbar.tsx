import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {MenuItems.map((menu, i) => {
          return (
            <li className="menu-items">
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
