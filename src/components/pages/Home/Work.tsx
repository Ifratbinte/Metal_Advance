import SectionHeading from "#components/common/SectionHeading";
import workData from "#mocks/jsonData/work.json";

const Work = () => {
  const works = workData.work;
  return (
    <>
      <section id="work" className="work section-gap base-bg-white">
        <div className="container">
          <SectionHeading title={works.title} short_title={works.short_title} />
        </div>
      </section>
    </>
  );
};

export default Work;
