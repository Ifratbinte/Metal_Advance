import NavItems from "./NavItems";
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus d-flex align-items-center flex-wrap">
        {NavItems.map((menu: any, i: number) => {
          return <MenuItems items={menu} key={i} />;
          // return (
          //   <li key={i} className="menu-items">
          //     <a href={menu.url}>{menu.title}</a>
          //   </li>
          // );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
