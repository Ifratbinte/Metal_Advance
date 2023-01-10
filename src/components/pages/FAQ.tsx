import accordionData from "#mocks/jsonData/faq.json";
import Accordion from "react-bootstrap/Accordion";
import { FiCheck } from "react-icons/fi";

const FAQ = () => {
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
            {/* <pre>{JSON.stringify(accordions, null, 4)}</pre>; */}
            <Accordion defaultActiveKey="0" flush>
              {accordions &&
                accordions?.map((accordion: any, i: number) => (
                  <Accordion.Item key={accordion.id} eventKey={String(accordion.id)}>
                    <Accordion.Header>{accordion.qus}</Accordion.Header>
                    <Accordion.Body>
                      {accordion.ans}
                      {accordion.list && (
                        <div className="accordion-inner-list mt-3">
                          <h6 className="fw-bold">{accordion.list.title}</h6>
                          <ul>
                            {accordion.list.list_items.map((accordionItem: any, i: number) => {
                              return (
                                <li key={i}>
                                  <FiCheck className="accordion-icon" /> {accordionItem.item}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
