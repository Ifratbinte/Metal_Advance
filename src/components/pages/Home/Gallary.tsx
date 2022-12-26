import SectionHeading from "#components/common/SectionHeading";
import galleryData from "#mocks/jsonData/gallery.json";
import { useState } from "react";
import PortfolioContent from "./GallaryItems";

const PortfolioIsotop = () => {
  const portfolio = galleryData.gallery;

  //get data from protfolioContent
  const [items, setItems] = useState(PortfolioContent);

  const filterItem = (cateItems: any) => {
    const updatedItems = PortfolioContent.filter((currentElement) => {
      return currentElement.category === cateItems;
    });
    setItems(updatedItems);
    cateItems.preventDefault();
  };

  return (
    <>
      <section id="portfolio" className="portfolio section-gap base-bg-white">
        <div className="container px-lg-5">
          <SectionHeading subtitle={portfolio.subtitle} title={portfolio.title} />

          {/* <!-- Filter Menu --> */}
          <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4">
            <li className="nav-item">
              <span className="nav-link active" onClick={() => setItems(PortfolioContent)}>
                All
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => filterItem("mobile_app")}>
                Mobile App
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => filterItem("digital_service")}>
                Digital Service
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => filterItem("ipo_service")}>
                Trade
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => filterItem("conference")}>
                Conference
              </span>
            </li>
          </ul>

          {/* Filter item section */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter">
              {/* filter item loop */}
              {items.map((item, i) => {
                return (
                  <div key={i} className="portfolio-box rounded my-3">
                    <div className="portfolio-img rounded">
                      <img className="img-fluid d-block" src={item.image} alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-overlay-details">
                          <h5 className="text-white font-weight-400">{item.name}</h5>
                          <span className="text-light">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PortfolioIsotop;
