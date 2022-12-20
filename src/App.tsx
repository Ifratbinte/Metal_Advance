import AppRoute from "#routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import AOS_ANIMATE from "./Animate_AOS";
import "./assets/style/component.scss";
import { store } from "./store/index";
AOS.init(AOS_ANIMATE);

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </>
  );
}

export default App;
