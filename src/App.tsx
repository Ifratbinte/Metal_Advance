import Footer from "#components/layout/Footer/Footer";
import HeaderMain from "#components/layout/Header/HeaderMain";
import "./assets/style/component.scss";

function App() {
  return (
    <>
      <div className="body-container"></div>
      <HeaderMain />

      <div className="hero h-100vh"></div>

      <Footer />
    </>
  );
}

export default App;
