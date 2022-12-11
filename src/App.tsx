import AppRoute from "#routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AOS_ANIMATE from "./Animate_AOS";
import "./assets/style/component.scss";
AOS.init(AOS_ANIMATE);

function App() {
  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
