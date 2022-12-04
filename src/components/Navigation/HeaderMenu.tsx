import Navbar from "./Navbar";

const HeaderMenu = () => {
  return (
    <header>
      <div className="nav-area d-flex align-items-center my-0 mx-auto">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="nav-left">
            <a href="/" className="header-logo">
              <img src="images/benemoy-securities.png" alt="" />
            </a>
          </div>
          <div className="nav-right d-flex align-items-center justify-content-between">
            <Navbar />
            <button className="btn btn-danger btn-auth ms-5">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderMenu;
