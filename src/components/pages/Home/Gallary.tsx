import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import galleryData from "#mocks/jsonData/gallery.json";
import { useGetPortfoliosQuery } from "#store/api/portfolio";
import { useGetPortfolioCategoryQuery } from "#store/api/portfolioCategory";
import { useState } from "react";

const PortfolioIsotop = () => {
  // section title
  const portfolio = galleryData.gallery;

  //get data from portfolioContent
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // category list
  const { data: portfolioCategory, isLoading, isError, error } = useGetPortfolioCategoryQuery(null);

  const { data: portfolioItem } = useGetPortfoliosQuery(null);
  console.log("portfolioItem", portfolioItem);

  return (
    <>
      {portfolioCategory?.data?.length && portfolioItem?.data?.length ? (
        <section id="portfolio" className="portfolio section-gap base-bg-white">
          <div className="container px-lg-5">
            <SectionHeading subtitle={portfolio.subtitle} title={portfolio.title} />

            {/* <pre>{JSON.stringify(portfolioCategory, null, 4)}</pre> */}

            {/* <!-- Filter Menu --> */}
            <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4" data-aos="zoom-in-down" data-aos-duration="1000">
              <li className="nav-item">
                <span className={`nav-link ${selectedCategory === "All" ? "active" : ""}`} onClick={() => setSelectedCategory("All")}>
                  All
                </span>
              </li>
              {portfolioCategory.data.map((category: any) => {
                return (
                  <li className="nav-item">
                    <span
                      className={`nav-link ${selectedCategory === category.attributes.title ? "active" : ""}`}
                      onClick={() => setSelectedCategory(category.attributes.title)}
                    >
                      {category.attributes.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Filter item section */}
            <div className="portfolio popup-ajax-gallery">
              <div className="row portfolio-filter">
                {portfolioItem?.data
                  .filter((item: any) => (selectedCategory === "All" ? true : item.attributes.portfolio_category.data.attributes.title === selectedCategory))
                  .map((item: any, i: any) => {
                    return (
                      <div key={i} className="portfolio-box rounded my-3" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="portfolio-img rounded">
                          <img className="img-fluid d-block" src={CONFIGS.CMS_URL + item?.attributes.image.data.attributes.formats.small.url} alt="" />
                          <div className="portfolio-overlay">
                            <div className="portfolio-overlay-details">
                              <h5 className="text-white font-weight-400">{item.attributes.title}</h5>
                              <span className="text-light">{item.attributes.portfolio_category.data.attributes.title}</span>
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
      ) : null}
    </>
  );
};
export default PortfolioIsotop;
