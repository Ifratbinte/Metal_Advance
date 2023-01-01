import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: JSX.Element;
  url?: string;
  id: number;
}

const ArticleCard: React.FC<Props> = ({ children, url, id }) => {
  console.log({url});
  return (
    <>
      {url ? (
        
        <a href={url} className="card-link primary fw-semibold fs-20">
          {children}
        </a>
      ) : (
        <Link to={`/articles/${id}`} className="card-link primary fw-semibold fs-20">
          {children}
        </Link>
      )}
    </>
  );
};

export default ArticleCard;
