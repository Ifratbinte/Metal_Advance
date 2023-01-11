import Tabs from "#components/Tab/components/Tabs";
import "#components/Tab/styles.css";
import accordionData from "#mocks/jsonData/faq.json";
import React, { useState } from "react";
// Tabs components
import BoAccounts from "#components/Tab/components/BoAccounts";
import General from "#components/Tab/components/General";
import Trading from "#components/Tab/components/Trading";
import MobileTrading from "#components/Tab/components/MobileTrading";
import ChargesFees from "#components/Tab/components/ChargesFees";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "BO Accounts",
    index: 1,
    Component: BoAccounts,
  },
  {
    label: "General",
    index: 2,
    Component: General,
  },
  {
    label: "Trading",
    index: 3,
    Component: Trading,
  },
  {
    label: "Mobile Trading",
    index: 4,
    Component: MobileTrading,
  },
  {
    label: "Charges & Fees",
    index: 5,
    Component: ChargesFees,
  },
];

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const accordions = accordionData.faq.faqItem;
  console.log({ accordions });

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{accordionData.faq.title}</h2>
          </div>
        </div>
      </section>
      <section id="faq" className="faq section-gap base-bg-white">
        <div className="container">
          <div className="row gy-3 section-card">
            <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
