import EmployeeCard from "#components/common/EmployeeCard";
import employeeData from "#mocks/jsonData/member.json";

const BoardOfDirector = () => {
  const members = employeeData.board.board_card;

  return (
    <>
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{employeeData.board.title}</h2>
            <h6 className="sub-header-subtitle font-Poppins fs-20 fw-normal">Home - {employeeData.board.pathname}</h6>
          </div>
        </div>
      </section>
      <section id="board" className="board section-gap base-bg-white">
        <div className="container">
          <div className="row gy-5">
            {members &&
              members.map((member: any, i: any) => {
                return (
                  <div className={i === 0 ? "col-12" : "col-lg-6 author-card"} key={i}>
                    <EmployeeCard
                      image={member.author_thumb}
                      alt={member.author_alt}
                      name={member.author_name}
                      designation={member.author_deg}
                      bio={member.author_bio}
                      button={member.author_link}
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

export default BoardOfDirector;
