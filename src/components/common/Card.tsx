import certificateData from '#mocks/jsonData/about.json';
import { Link } from 'react-router-dom';

interface Props {
  image?: string;
  alt?: any;
  title?: string;
  description?: string;
  button?: string;
  cr_title?: string;
  cr_list?: any[];
}

const Card: React.FC<Props> = ({
  image,
  alt,
  title,
  description,
  button,
  cr_title,
  cr_list,
}) => {
  const crData = certificateData.about.certificate.cards;

  return (
    <div
      className="card p-2 border shadow-sm border-0 rounded overflow-hidden rounded-0 h-100"
      data-aos="zoom-in-down"
      data-aos-duration="1500"
    >
      <img src={image} alt={alt} className="card-img-top pt-2" />
      <div className="card-body text-center">
        <h5 className="card-title overflow-hidden fw-medium py-3 fs-20 m-0">
          {title}
        </h5>
        <p className="card-text overflow-hidden pt-1">
          {description}
        </p>
        {button && (
          <Link to="#" className="btn button-base-secondary card-btn">
            {button}
          </Link>
        )}
      </div>
    </div>
    // <div
    //   className={
    //     cr_list ? "card h-100 rounded" : "card p-2 border border-0 rounded overflow-hidden rounded-0 h-100"
    //   }
    //   data-aos="zoom-in-down"
    //   data-aos-duration="1500"
    // >
    //   {cr_list ? (
    //     <>
    //       <div className="card-header">
    //         <h5>Dhaka Stock Exchange</h5>
    //       </div>
    //       <div className="card-body">
    //         <ul className="cr-list">
    //           {cr_list.map((list: any, i: number) => (
    //             <li key={i}>
    //               <strong>{list.title}</strong> : {list.value}
    //               {list.desc}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <img src={image} alt={alt} className="card-img-top" />
    //       <div className="card-body text-center px-4">
    //         <h5 className="card-title overflow-hidden fw-medium py-3 fs-20 m-0">{title}</h5>
    //         <p className="card-text overflow-hidden pt-1 fs-16">{description}</p>
    //         {button && (
    //           <Link to="#" className="btn button-base-secondary card-btn">
    //             {button}
    //           </Link>
    //         )}
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default Card;
