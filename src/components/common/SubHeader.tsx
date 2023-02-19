interface Props {
  title: string;
}
const SubHeader: React.FC<Props> = ({ title }) => {
  // const pathname = window.location.pathname;
  return (
    <>
      <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="sub-header-title font-Poppins fw-bold">{title}</h2>
      </div>
    </>
  );
};

export default SubHeader;
