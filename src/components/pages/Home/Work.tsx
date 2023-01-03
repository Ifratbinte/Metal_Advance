import SectionHeading from "#components/common/SectionHeading";
import WorkItem from "#components/common/WorkItem";
import workData from "#mocks/jsonData/work.json";

const Work = () => {
  const works = workData.work;
  return (
    <>
      <section id="work" className="work section-gap base-bg-white">
        <div className="container">
          <SectionHeading title={works.title} short_title={works.short_title} />
          <div className="work-shape-wrap pt-5">
            <div className="work-item gap-4 d-flex align-items-center justify-content-center">
              {works.item &&
                works.item.map((work: any, i: any) => {
                  return <WorkItem key={i} svgIcon={work.icon} alt={work.alt} title={work.title} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
//
