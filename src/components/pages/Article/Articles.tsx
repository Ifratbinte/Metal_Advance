import ArticleCard from "#components/common/ArticleCard";
import LinkRedirect from "#components/common/LinkRedirect";
import CONFIGS from "#configs/index";
import articleData from "#mocks/jsonData/article.json";
import { useGetArticlesQuery } from "#store/api/article";

const ArticlesList = () => {
  const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);
  console.log("articles", articles);

  const articleTitle = articleData.article;

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fw-bold">{articleTitle.title}</h2>
          </div>
        </div>
      </section>
      {articles?.data?.length ? (
        <section id="article" className="article section-gap">
          <div className="container">
            {/* <SectionHeading title={articleTitle.title} short_title={articleTitle.short_title} /> */}
            <div className="row gy-3 section-card">
              {articles &&
                articles.data.map((article: any, i: any) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                      <LinkRedirect id={article.id} url={article.attributes.url}>
                        <ArticleCard
                          image={CONFIGS.CMS_URL + article.attributes.image.data.attributes.formats.thumbnail.url}
                          alt={article.attributes.title}
                          date={article.attributes.createdAt.split("T")[0]}
                          title={article.attributes.title}
                          description={article.attributes.short_description}
                          id={article.id}
                          link={article.attributes.link}
                          url={article.attributes.url}
                        />
                      </LinkRedirect>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ArticlesList;
