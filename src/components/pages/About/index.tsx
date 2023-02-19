import React from 'react';
import AboutHero from './AboutHero';
import aboutData from '#mocks/jsonData/about.json';
import headingTitle from '#mocks/jsonData/subheading.json';
import AboutCompanyInfo from './AboutCompanyInfo';
import AboutMission from './AboutMission';
import AboutLicenseDetails from './AboutLicenseDetails';
import AboutServices from './AboutServices';
import AboutObjectives from './AboutObjectives';
import ServiceSlider from '#components/pages/Service/ServiceSlider';
import AboutSisterConcern from './AboutSisterConcern';
import { useGetSisterConcernQuery } from '#store/api/sisterConcern';

interface Props {}

const AboutPage: React.FC<Props> = () => {
  const { data, isLoading, isError } = useGetSisterConcernQuery(null);
  const about = aboutData.about;

  return (
    <>
      <AboutHero title={headingTitle.sub_heading.about_title} />
      <AboutCompanyInfo data={about} />
      <AboutLicenseDetails certificate={about.certificate} />
      <AboutMission data={about.mission_vision} />
      <AboutServices about={about} />
      <AboutObjectives about={about} />
      {/* <ServiceSlider /> */}
      <AboutSisterConcern
        data={data?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default AboutPage;
