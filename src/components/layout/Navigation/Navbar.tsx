import NavItems from "./NavItems";
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus d-flex align-items-center flex-wrap">
        {NavItems.map((menu: any, i: number) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={i} depthLevel= {depthLevel}/>;
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
