import PhoneContact from "#components/common/PhoneContact";
import SocialIcon from "#components/common/SocialIcon";
import { useEffect, useState } from "react";

function HeaderTop() {
  // sticky header hide show
  const [display, setDisplay] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setDisplay("none") : setDisplay("block");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <section id="topBar" className="isTransparent topBar text-white" style={{ display: display }}>
        <div className="d-flex align-items-center justify-content-between">
          <PhoneContact />
          <SocialIcon />
        </div>
      </section>
    </>
  );
}
export default HeaderTop;
