import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import galleryData from "#mocks/jsonData/gallery.json";
import { useGetPortfoliosQuery } from "#store/api/portfolio";
import { useGetPortfolioCategoryQuery } from "#store/api/portfolioCategory";
import { useState } from "react";
import { FaEye, FaLink } from "react-icons/fa";

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
        <section id="portfolio" className="portfolio section-gap base-bg-light">
          <div className="container px-lg-5">
            <SectionHeading subtitle={portfolio.subtitle} title={portfolio.title} />

            {/* <pre>{JSON.stringify(portfolioCategory, null, 4)}</pre> */}

            {/* <!-- Filter Menu --> */}
            <ul id="portfolio-flters" className="border-bottom-0 mb-4" data-aos="zoom-in-down" data-aos-duration="1000">
              <li className={`nav-link ${selectedCategory === "All" ? "filter-active" : ""}`} onClick={() => setSelectedCategory("All")}>
                All
              </li>
              {portfolioCategory.data.map((category: any) => {
                return (
                  <li
                    className={`${selectedCategory === category.attributes.title ? "filter-active" : ""}`}
                    onClick={() => setSelectedCategory(category.attributes.title)}
                  >
                    {category.attributes.title}
                  </li>
                );
              })}
            </ul>

            {/* Filter item section */}
            <div className="portfolio popup-ajax-gallery">
              <div className="row portfolio-container">
                {portfolioItem?.data
                  .filter((item: any) => (selectedCategory === "All" ? true : item.attributes.portfolio_category.data.attributes.title === selectedCategory))
                  .map((item: any, i: any) => {
                    return (
                      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div key={i} className="portfolio-wrap" data-aos="zoom-in" data-aos-duration="1000">
                          <div className="portfolio-img rounded">
                            <img className="img-fluid image-height" src={CONFIGS.CMS_URL + item?.attributes.image.data.attributes.formats.small.url} alt="" />
                            <div className="portfolio-info">
                              <h4 className="text-white font-weight-400">{item.attributes.title}</h4>
                              <span className="text-light">{item.attributes.portfolio_category.data.attributes.title}</span>
                            </div>
                            <div className="portfolio-links">
                              <a href="" className="portfolio-lightbox" title="App 1">
                                <FaEye />
                              </a>
                              <a href="" title="More Details">
                                <FaLink />
                              </a>
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
