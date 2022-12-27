import ArticleCard from "#components/common/ArticleCard";
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

const Article = () => {
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
                        <ArticleCard
                          image={CONFIGS.CMS_URL + article.attributes.image.data.attributes.formats.thumbnail.url}
                          alt={article.attributes.title}
                          date={article.attributes.createdAt.split("T")[0]}
                          title={article.attributes.title}
                          description={article.attributes.short_description}
                          link={article.attributes.btn_text}
                        />
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

export default Article;
// import ArticleCard from "#components/common/ArticleCard";
// import SectionHeading from "#components/common/SectionHeading";
// import articleData from "#mocks/jsonData/article.json";

// const Article = () => {
//   const articles = articleData.article;
//   return (
//     <>
//       <section id="article" className="article section-gap base-bg-light">
//         <div className="container">
//           <SectionHeading title={articles.title} short_title={articles.short_title} />
//           <div className="row gy-3 section-card">
//             {articles.card &&
//               articles.card.map((article: any, i: any) => {
//                 return (
//                   <div className="col-lg-4" key={i}>
//                     <ArticleCard
//                       image={article.article_img}
//                       alt={article.image_alt}
//                       date={article.article_date}
//                       title={article.article_title}
//                       description={article.article_desc}
//                       link={article.article_link}
//                     />
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Article;
