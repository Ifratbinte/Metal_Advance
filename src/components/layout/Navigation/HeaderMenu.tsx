import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HeaderMenu = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    navRef.current?.classList?.toggle("responsive-nav");
  };

  // sticky nav bg & size
  const [navSize, setNavSize] = useState("4.5rem");
  const [navColor, setNavColor] = useState("transparent");
  const [shadow, setShadow] = useState("none");
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setNavColor("rgba(88, 70, 249, 0.9)") : setNavColor("transparent");
    window.scrollY > 20 ? setNavSize("5rem") : setNavSize("4.5rem");
    window.scrollY > 20 ? setShadow("0px 2px 15px rgb(116 68 239 / 22%)") : setShadow("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      style={{
        border: "1px solid #ffffff40",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        background: "#ffffff10",
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <div
        className="nav-area d-flex align-items-center my-0 mx-auto"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          boxShadow: shadow,
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="nav-left">
            <Link to="/" className="header-logo">
              <img src="images/benemoy-securities.png" alt="" />
            </Link>
          </div>
          <div className="nav-right" ref={navRef}>
            <Navbar />
            <button className="btn button-login button-base-warning-outline">Login</button>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </div>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderMenu;
