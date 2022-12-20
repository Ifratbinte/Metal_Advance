import ArticleCard from "#components/common/ArticleCard";
import { useGetArticlesQuery } from "#store/api/article";
import SectionHeading from '#components/common/SectionHeading';
import articleData from '#mocks/jsonData/article.json';

const Article = () => {
  const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);
  const articleTitle = articleData.article;

  return (
    <>
      <section id="article" className="article section-gap base-bg-light">
        <div className="container">
          <SectionHeading title={articleTitle.title} short_title={articleTitle.short_title} />
          <div className="row gy-3 section-card">
            {articles &&
              articles.data.map((article: any, i: any) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <ArticleCard
                      image={article.attributes.image}
                      alt={article.attributes.title}
                      date={article.attributes.createdAt}
                      title={article.attributes.title}
                      description={article.attributes.short_description}
                      link={article.attributes.btn_text}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
