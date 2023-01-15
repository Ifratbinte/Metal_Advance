interface Props {
  subtitle?: string;
  title: string;
  span?: any;
  short_title?: string;
  isNotCenter?: boolean;
  isDimBg?: boolean;
}
const sectionHeading: React.FC<Props> = ({ subtitle, title, span, short_title, isNotCenter = true, isDimBg = false }) => {
  return (
    <div
      className={!isNotCenter ? "section-head width-md" : "section-head section-border text-center width-md mx-auto"}
      data-aos="fade-down"
      data-aos-easing="linear" data-aos-duration="1000"
    >
      {subtitle && (
        <h5
          className={
            isDimBg
              ? "d-inline-flex mb-3 px-4 py-2 fs-16 fw-semibold text-info bg-info bg-opacity-10 border border-info border-opacity-10 rounded-5"
              : "subtitle font-Inter fw-semibold fs-18 fw-semibold secondary"
          }
        >
          {subtitle}
        </h5>
      )}

      <h2 className="title font-Inter fw-semibold" data-aos="zoom-in">
        {title}
        {span && <span className="secondary"> {span}</span>}
      </h2>
      {short_title && <h5 className="short-title">{short_title}</h5>}
    </div>
  );
};

export default sectionHeading;
