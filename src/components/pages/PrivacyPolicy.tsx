import PolicyData from "#mocks/jsonData/policy.json";
import { FaCheckSquare } from "react-icons/fa";
const TermsPrivacyPolicy = () => {
  const PrivacyPolicy = PolicyData.policy;
  console.log("policy", PrivacyPolicy);

  return (
    <>
      <section className="sub-header" id="privacyPolicy">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fw-bold">{PrivacyPolicy.title}</h2>
          </div>
        </div>
      </section>
      <section className="section-gap privacy-policy">
        <div className="container">
          <div className="policy p-sm-4 p-2">
            <div className="policy-content">
              <p>{PrivacyPolicy.content}</p>
            </div>
            <ul>
              {PrivacyPolicy &&
                PrivacyPolicy.policy_data.map((policy: any, i: any) => {
                  return (
                    <li key={i} className="d-flex">
                      <span className="policy-icon me-3">
                        <FaCheckSquare />
                      </span>
                      <div className="policy-text">
                        <h4>{policy.policy_title}</h4>
                        <p>{policy.desc}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPrivacyPolicy;
