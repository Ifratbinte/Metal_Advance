import Navbar from "./Navbar";

const HeaderMenu = () => {
  return (
    <header>
      <div className="container nav-area">
        <a href="/" className="header-logo">
          Logo
        </a>
        <Navbar/>
      </div>
    </header>
  );
};
export default HeaderMenu;
