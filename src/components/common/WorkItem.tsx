interface Props {
  svgIcon: string;
  alt: string;
  title: string;
  arrowTop: string;
  arrowBottom: string;
}
const WorkItem: React.FC<Props> = ({ svgIcon, alt, title, arrowTop, arrowBottom }) => {
  return (
    // <div className="work-item-wrapper">
    <div className="work-single-item d-flex align-items-center rounded-circle" data-aos="zoom-in-up" data-aos-duration="800">
      <div className="items-status is-outline"></div>
      <div>
        {arrowTop && (
          <div className="arrow arrow-top d-none d-md-block">
            <img src={arrowTop} alt={title} />
          </div>
        )}
        <div className="work-single-item-border border-color d-flex flex-direction-column justify-content-center align-items-center rounded-circle">
          <div className="work-single-items-content">
            <img src={svgIcon} alt={alt} className="work-icon" />
            <h5 className="work-title text-center font-Poppins fw-normal fs-16">{title}</h5>
          </div>
        </div>
        {arrowBottom && (
          <div className="arrow arrow-bottom d-none d-md-block">
            <img src={arrowBottom} alt={title} />
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default WorkItem;
