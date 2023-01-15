interface Props {
  title: string;
}
const SubHeader: React.FC<Props> = ({ title }) => {
  const pathname = window.location.pathname;
  return (
    <>
      <div className="section sub-header">
        <div className="container">
          <div className="sub-header-inner text-center">
            <h2 className="sub-header-title font-poppins fs-45 fw-bold">{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
