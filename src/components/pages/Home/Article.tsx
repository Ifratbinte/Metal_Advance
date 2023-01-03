import ArticleCard from "#components/common/ArticleCard";
import LinkRedirect from "#components/common/LinkRedirect";
import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import articleData from "#mocks/jsonData/article.json";
import { useGetArticlesQuery } from "#store/api/article";
import ArticleSlider from "react-slick";
var Slider = {
  // autoplay: true,
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const ArticleContent = () => {
  const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);
  console.log("articles", articles);

  const articleTitle = articleData.article;

  

  return (
    <>
      {articles?.data?.length ? (
        <section id="article" className="article section-gap base-bg-white">
          <div className="container">
            <SectionHeading title={articleTitle.title} short_title={articleTitle.short_title} />
            <div className="row gy-3 section-card">
              <ArticleSlider {...Slider}>
                {articles &&
                  articles.data.map((article: any, i: any) => {
                    return (
                      <div className="col-lg-3" key={i}>
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
              </ArticleSlider>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ArticleContent;
