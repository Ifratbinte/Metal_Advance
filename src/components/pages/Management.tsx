import EmployeeCard from "#components/common/EmployeeCard";
import CONFIGS from "#configs/index";
import employeeData from "#mocks/jsonData/member.json";
import { useGetManagementQuery } from "#store/api/management";
import { useMemo } from "react";

const Management = () => {
  const { data: teams, isLoading, isError, error } = useGetManagementQuery("/v1/teams?populate=*&filters[role][$eq]=management&sort=priority:ASC");
  const managements = employeeData.management.management_card;

  const teamComponentArray = useMemo(() => {
    /**
     * i = 0
     * j = 0
     * i % 5 == 0 ? i = 0 : null
     *
     * col1 = []
     * col2 = []
     * col3 = []
     *
     * i == 0 && priority === 1 ? col2.push(jsx) : col1.push(jxs)
     * i < 4
     *      ? { j == 0 ? col1.push(index > 5 && j === 0 ? <emptyCard /> : jsx): col2.push(jsx); j++;}
     *       : col3.push(jsx); i = 0; j= 0
     */

    let i = 0;
    let j = 0;
    let components: any[] = [];
    if (!teams?.data) return [];

    let col1: JSX.Element[] = [];
    let col2: JSX.Element[] = [];
    let col3: JSX.Element[] = [];

    teams.data.map((team: any, index: number) => {
      if (i % 5 === 0 && i !== 0) {
        i = 0;
      }

      if (i === 0) {
        col2.push(
          <EmployeeCard
            image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
            alt={team.attributes.name}
            name={team.attributes.name}
            designation={team.attributes.designation}
            bio={team.attributes.content}
          />
        );
      } else if (i > 0 && i < 4) {
        // { j == 0 ? col1.push(index > 5 && j === 0 ? <emptyCard /> : jsx): col2.push(jsx); j++;}
        console.log({ j, index });

        if (j === 0 && index > 5) {
          col2.push(
            <>
              <div></div>
              <EmployeeCard
                image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
                alt={team.attributes.name}
                name={team.attributes.name}
                designation={team.attributes.designation}
                bio={team.attributes.content}
              />
            </>
          );
        } else if (j > 0) {
          col2.push(
            <EmployeeCard
              image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
              alt={team.attributes.name}
              name={team.attributes.name}
              designation={team.attributes.designation}
              bio={team.attributes.content}
            />
          );
        } else {
          col1.push(
            <EmployeeCard
              image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
              alt={team.attributes.name}
              name={team.attributes.name}
              designation={team.attributes.designation}
              bio={team.attributes.content}
            />
          );
        }
        j++;
      } else {
        col3.push(
          <EmployeeCard
            image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
            alt={team.attributes.name}
            name={team.attributes.name}
            designation={team.attributes.designation}
            bio={team.attributes.content}
          />
        );

        let data = [
          <>
            <div className="col author-card" key={i}>
              <div className="row">{col1}</div>
            </div>
            <div className="col author-card" key={i}>
              <div className="row">{col2}</div>
            </div>
            <div className="col author-card" key={i}>
              <div className="row">{col3}</div>
            </div>
          </>,
        ];

        components.push(data);
        j = 0;
        col1 = [];
        col2 = [];
        col3 = [];
      }
      i++;
    });

    console.log({
      data: teams.data,
      col1,
      col2,
      col3,
      components,
    });

    return components;
  }, [teams]);

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
          {teamComponentArray.map((item) => (
            <div className="row gy-5 section-parent align-items-center">{item}</div>
          ))}
          {/* <div className="row gy-5 section-parent align-content-around justify-content-center">{teamComponentArray}</div> */}
        </div>
      </section>
    </>
  );
};

export default Management;

// if (i === 0) {
//   console.log("First Section", i);

//   components.push(
//     <div className="col author-card" key={i}>
//       <div className="row">
//         <EmployeeCard
//           image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
//           alt={team.attributes.name}
//           name={team.attributes.name}
//           designation={team.attributes.designation}
//           bio={team.attributes.content}
//         />
//       </div>
//     </div>
//   );
// } else if (i <= 3 && i > 0) {
//   console.log("Second Section", i);
//   rows.push(
//     <div className="row" key={i}>
//       <EmployeeCard
//         image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
//         alt={team.attributes.name}
//         name={team.attributes.name}
//         designation={team.attributes.designation}
//         bio={team.attributes.content}
//       />
//     </div>
//   );
// } else {
//   console.log("Last Section", i);
//   components.push(
//     <>
//       <div className="col author-card" key={i - 1}>
//         {rows}
//       </div>
//       <div className="col author-card" key={i}>
//         <div className="row">
//           <EmployeeCard
//             image={CONFIGS.CMS_URL + team.attributes.image.data.attributes.formats.thumbnail.url}
//             alt={team.attributes.name}
//             name={team.attributes.name}
//             designation={team.attributes.designation}
//             bio={team.attributes.content}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// });
// console.log({
// data: teams?.data,
// components,
// rows,
// });
