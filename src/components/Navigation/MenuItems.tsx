import Dropdown from "./Dropdown";

const MenuItems = ({ items }: any) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button>{items.title}</button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};
export default MenuItems;
