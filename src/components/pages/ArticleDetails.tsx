import { useGetArticlesQuery } from "#store/api/article";
import { useParams } from "react-router-dom";
const ArticleDetails = () => {
  const { articleId } = useParams();

  const { data, isLoading, isError, error } = useGetArticlesQuery(null);
  const thisArticle = data?.data?.find((article: any) => article.id == articleId);

  console.log({ articleId, data, isLoading, isError, thisArticle });
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
            {thisArticle ? (
              <div className="col-lg-8">
                <div className="article-details-inner">
                  <div className="article-details-thumb">
                    <img src="" alt="" />
                  </div>
                  <div className="article-details-content">
                    <h2 className="article-title">{thisArticle.attributes.title}</h2>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p>No data found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
