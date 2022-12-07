interface Props {
  subtitle?: string;
  title: string;
  span?: any;
  short_title?: string;
}
const sectionHeading: React.FC<Props> = ({ subtitle, title, span, short_title }) => {
  return (
<<<<<<< HEAD
    <div className="section-head section-border text-center width-md mx-auto">
      {subtitle && <h5 className="subtitle font-Inter fw-semibold fs-18 fw-semibold danger">{subtitle}</h5>}

      <h2 className="title font-Inter fw-semibold">
=======
    <div className="section-head section-border text-center">
      <h5 className="subtitle font-Inter fw-semibold fs-16 danger">{subtitle}</h5>

      <h2 className="title font-Inter fw-semibold fs-35">
>>>>>>> 2b0cfb7e720e45628a768eb2f211090fbd06bba7
        {title}
        {span && <span className="danger"> {span}</span>}
      </h2>
      {short_title && <h5 className="short-title">{short_title}</h5>}
    </div>
  );
};

export default sectionHeading;
