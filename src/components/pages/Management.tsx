import EmployeeCard from "#components/common/EmployeeCard";
import employeeData from "#mocks/jsonData/member.json";
const Management = () => {
  const managements = employeeData.management.management_card;
  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{employeeData.management.title}</h2>
            <h6 className="sub-header-subtitle font-Poppins fs-20 fw-normal">Home - {employeeData.management.pathname}</h6>
          </div>
        </div>
      </section>
      <section id="board" className="board section-gap base-bg-white">
        <div className="container">
          <div className="row gy-5">
            {managements &&
              managements.map((management: any, i: any) => {
                return (
                  <div className="col-lg-6 author-card" key={i}>
                    <EmployeeCard
                      image={management.author_thumb}
                      alt={management.author_alt}
                      name={management.author_name}
                      designation={management.author_deg}
                      bio={management.author_bio}
                      bio_2={management.author_bio_2}
                      button={management.author_link}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Management;
