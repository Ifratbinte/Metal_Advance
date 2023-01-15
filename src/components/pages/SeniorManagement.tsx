import EmployeeCard from "#components/common/EmployeeCard";
import CONFIGS from "#configs/index";
import employeeData from "#mocks/jsonData/member.json";
import { useGetManagementQuery } from "#store/api/management";

const SeniorManagement = () => {
  const { data: teams, isLoading, isError, error } = useGetManagementQuery("/v1/teams?populate=*&filters[role][$eq]=management&sort=priority:ASC");
  const managements = employeeData.management.management_card;

  console.log({ managements });

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{employeeData.management.title}</h2>
          </div>
        </div>
      </section>
      <section id="employee" className="employee section-gap base-bg-light">
        <div className="container">
          <div className="row gy-5 section-parent align-items-center">
            {/* <pre>{JSON.stringify(teams, null, 43)}</pre> */}

            {teams?.data &&
              teams?.data.map((team: any, i: number) => (
                <div className="col-lg-4 col-md-6 author-card" key={i}>
                  <EmployeeCard
                    image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
                    alt={team.attributes.name}
                    name={team.attributes.name}
                    designation={team.attributes.designation}
                    bio={team.attributes.content}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeniorManagement;
