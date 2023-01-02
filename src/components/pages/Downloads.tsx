import downloadData from "#mocks/jsonData/downloads.json";
import { FaFileDownload } from "react-icons/fa";

const ArticlesList = () => {
  // const { data: articles, isLoading, isError, error } = useGetArticlesQuery(null);

  const documents = downloadData.download.downloadItem;

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{downloadData.download.title}</h2>
          </div>
        </div>
      </section>
      <section id="downloadDoc" className="download-doc section-gap base-bg-white">
        <div className="container">
          <div className="row gy-3 section-card">
            {documents &&
              documents.map((document: any, i: any) => {
                return (
                  <div className="col-lg-3" key={i}>
                    <div className="doc animated">
                      <div className="doc-photo doc-shape doc-shape-a">
                        <img src={document.image} alt="" />
                      </div>
                      <div className="doc-text">
                        <h5 className="doc-title title-sm">
                          {document.title} <small>({document.year})</small>
                        </h5>
                        <a className="doc-download" href="#">
                          <FaFileDownload/>
                        </a>
                        <div className="doc-lang">{document.lang}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesList;
