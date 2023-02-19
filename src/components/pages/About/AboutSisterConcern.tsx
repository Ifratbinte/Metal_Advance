import InfographicCard from "#components/common/infographic-cards/InfographicCard";
import SectionHeading from "#components/common/SectionHeading";
import SliderOptions from "#helpers/slider-init-values";
import { useEffect } from "react";
import ServiceSlider from "react-slick";

interface Props {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const options = { ...SliderOptions, slidesToShow: 4 };
const AboutSisterConcern: React.FC<Props> = ({ data, isLoading, isError }) => {

  // redirect to section
  useEffect(() => {
    if (window.location.hash) {
      window.location.replace(window.location.href);
    }
  }, []);

  return (
    <section id="sisterConcern" className="section-gap">
      <div className="container">
        <SectionHeading subtitle={"Our"} title={"Sister Concerns"} />
        <ServiceSlider {...options}>
          {!isError &&
            !isLoading &&
            data?.length &&
            data.map((item: any) => {
              const { company_name, website, logo } = item?.attributes;
              return (
                <InfographicCard title={company_name} link={website} description="" img={"https://api.binimoysecurities.com" + logo?.data?.attributes?.url} />
              );
            })}
        </ServiceSlider>
      </div>
    </section>
  );
};

export default AboutSisterConcern;
