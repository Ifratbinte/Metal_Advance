interface Props {
  subtitle: string;
  title: string;
  span?: any;
}
const sectionHeading: React.FC<Props> = ({ subtitle, title, span }) => {
  return (
    <div className="section-head section-border text-center width-md mx-auto">
      <h5 className="subtitle font-Inter fw-semibold fs-18 fw-semibold danger">{subtitle}</h5>

      <h2 className="title font-Inter fw-semibold">
        {title}
        {span && <span className="danger"> {span}</span>}
      </h2>
    </div>
  );
};

export default sectionHeading;
