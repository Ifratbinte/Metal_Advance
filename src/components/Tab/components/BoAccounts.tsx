import accordionData from "#mocks/jsonData/faq.json";
import { FC, Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FiCheck } from "react-icons/fi";

const BoAccountTab: FC<{}> = () => {
  const accordions = accordionData.faq.faqItem;
  console.log({ accordions });
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default BoAccountTab;
