import Details from "#components/common/Details";
import CONFIGS from "#configs/index";
import { useGetArticlesQuery } from "#store/api/article";
import { useParams } from "react-router-dom";
const ArticleDetails = () => {
  const { articleId } = useParams();

  const { data: articleData, isLoading, isError, error } = useGetArticlesQuery(null);
  const thisArticle = articleData?.data?.find((article: any) => article.id == articleId);

  // console.log({ articleId, articleData, isLoading, isError, thisArticle });

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">Article Details</h2>
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
              <h4 className="fs-32 border-bottom pb-3">Related Article</h4>
              {articleData &&
                articleData.data.map((relatedArticle: any, i: number) => {
                  console.log({ relatedArticle });
                  return (
                    <div className="related-article-inner" key={i}>
                      <h5 className="related-article-title fw-medium mb-3">{relatedArticle.attributes.title}</h5>
                      <div className="d-flex align-items-center">
                        <p className="related-article-desc me-3">{relatedArticle.attributes.short_description}</p>
                        <img
                          className="related-article-thumb img-fluid"
                          src={CONFIGS.CMS_URL + relatedArticle.attributes.image.data.attributes.formats.thumbnail.url}
                          alt={relatedArticle.attributes.title}
                        />
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

export default ArticleDetails;
