import classes from "./ScrollDown.module.scss";

const ScrollDown = () => {
  const handleClickScroll = () => {
    console.log("click");

    window.scroll({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${classes["scroll-container"]} cursor-pointer`} onClick={handleClickScroll}>
      <div className={classes.mouse}></div>
      <p className={classes["scroll-text"]}>Scroll</p>
    </div>
  );
};

export default ScrollDown;
