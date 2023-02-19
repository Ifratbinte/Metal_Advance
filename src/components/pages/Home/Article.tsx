import ArticleCard from "#components/common/ArticleCard";
import LinkRedirect from "#components/common/LinkRedirect";
import Loader from "#components/common/Loader/Loader";
import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import SliderOptions from "#helpers/slider-init-values";
import articleData from "#mocks/jsonData/article.json";
import { useGetArticlesQuery } from "#store/api/article";
import ArticleSlider from "react-slick";

const ArticleContent = () => {
  const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);
  console.log("articles", articles);

  const articleTitle = articleData.article;

  const options = { ...SliderOptions, slidesToShow: 4 };

  return (
    <>
      {isLoading && !isError ? (
        <Loader />
      ) : articles?.data?.length ? (
        <section id="article" className="article section-gap base-bg-light">
          <div className="container">
            <SectionHeading title={articleTitle.title} short_title={articleTitle.short_title} />
            <div className="gy-3 section-card">
              <ArticleSlider {...options}>
                {articles &&
                  articles.data.map((article: any, i: any) => {
                    return (
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
                    );
                  })}
              </ArticleSlider>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ArticleContent;
