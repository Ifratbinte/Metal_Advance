import Details from "#components/common/Details";
import LinkRedirect from "#components/common/LinkRedirect";
import CONFIGS from "#configs/index";
import { useGetArticlesQuery } from "#store/api/article";
import Output from "editorjs-react-renderer";
import { useParams } from "react-router-dom";
const ArticleDetails = () => {
  const { articleId } = useParams();

  const { data: articleData, isLoading, isError, error } = useGetArticlesQuery(null);
  const thisArticle = articleData?.data?.find((article: any) => article.id == articleId);

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fw-bold">Article Details</h2>
          </div>
        </div>
      </section>
      <section id="articleDetails" className="article section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {thisArticle ? (
                <Details
                  title={thisArticle.attributes.title}
                  sub_title={thisArticle.attributes.short_description}
                  date={thisArticle.attributes.publishedAt.split("T")[0]}
                  image={CONFIGS.CMS_URL + thisArticle.attributes.image.data.attributes.formats.medium.url}
                  content={thisArticle.attributes.content}
                />
              ) : (
                <div>
                  <p>No data found</p>
                </div>
              )}
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <h4 className="fs-32 pb-2 animate-text">Trending Post</h4>
              <div className="related-article">
                {articleData &&
                  articleData.data.map((relatedArticle: any, i: number) => {
                    return (
                      <LinkRedirect id={relatedArticle.id} url={relatedArticle.attributes.url}>
                        <div className="related-article-inner" key={i}>
                          <h5 className="related-article-title fw-medium mb-2">{relatedArticle.attributes.title}</h5>
                          <div className="d-flex align-items-center">
                            <p className="related-article-desc mb-0">
                              {relatedArticle.attributes.short_description && <Output data={JSON.parse(relatedArticle.attributes.short_description)} />}
                            </p>
                            <img
                              className="related-article-thumb img-fluid"
                              src={CONFIGS.CMS_URL + relatedArticle.attributes.image.data.attributes.formats.thumbnail.url}
                              alt={relatedArticle.attributes.title}
                            />
                          </div>
                        </div>
                      </LinkRedirect>
                    );
                  })}
              </div>
              <div className="oms-checkout mt-4">
                <span className="d-flex justify-content-center mb-2 fs-18 animate-text fw-bold"> Checkout Our OMS </span>
                <a href="http://157.245.56.86:3000/" target="_blank">
                  <div className="oms-checkout-banner">
                    <img src="/images/banner/dashboard.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
