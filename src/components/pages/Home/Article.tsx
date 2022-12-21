import ArticleCard from "#components/common/ArticleCard";
import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import articleData from "#mocks/jsonData/article.json";
import { useGetArticlesQuery } from "#store/api/article";

const Article = () => {
  const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);
  console.log("articles", articles);

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
                      image={CONFIGS.CMS_URL + article.attributes.image.data.attributes.formats.thumbnail.url}
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
