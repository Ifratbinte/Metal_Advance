import EmployeeCard from "#components/common/EmployeeCard";
import CONFIGS from "#configs/index";
import employeeData from "#mocks/jsonData/member.json";
import { useGetManagementQuery } from "#store/api/management";

const Management = () => {
  const { data: teams, isLoading, isError, error } = useGetManagementQuery("/v1/teams?populate=*&filters[role][$eq]=management");
  console.log("team", teams);
  const managements = employeeData.management.management_card;

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{employeeData.management.title}</h2>
            <h6 className="sub-header-subtitle font-Poppins fs-20 fw-normal">About - {employeeData.management.pathname}</h6>
          </div>
        </div>
      </section>

      <section id="board" className="board section-gap base-bg-white">
        <div className="container">
          <div className="row gy-5">
            {teams &&
              teams.data.map((team: any, i: any) => {
                return (
                  <div className="col-lg-6 author-card" key={i}>
                    <EmployeeCard
                      image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
                      alt={team.attributes.name}
                      name={team.attributes.name}
                      designation={team.attributes.designation}
                      bio={team.attributes.content}
                      button={team.attributes.btn_text}
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
