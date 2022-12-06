interface Props {
  subtitle: string;
  title: string;
  span?: any;
}
const sectionHeading: React.FC<Props> = ({ subtitle, title, span }) => {
  return (
    <div className="section-head section-border text-center">
      <h5 className="subtitle font-Inter fw-semibold fs-16 danger">{subtitle}</h5>

      <h2 className="title font-Inter fw-semibold fs-35">
        {title}
        {span && <span className="text-danger"> {span}</span>}
      </h2>
    </div>
  );
};

export default sectionHeading;
