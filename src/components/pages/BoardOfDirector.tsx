import employeeData from "#mocks/jsonData/member.json";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const BoardOfDirector = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const handleClose = () => setShow(false);
  const handleShow = (data: any) => {
    setSelectedMember(data);
    setShow(true);
  };

  const members = employeeData.board.board_card;
  return (
    <>
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{employeeData.board.title}</h2>
          </div>
        </div>
      </section>
      <section id="team" className="team section-gap base-bg-white">
        <div className="container">
          <div className="row gy-5">
            {members &&
              members.map((member: any, i: any) => {
                return (
                  <>
                    <div className={i === 0 ? "col-12 custom-team-card" : "col-lg-3 col-md-4 col-sm-6"} key={i} onClick={() => handleShow(member)}>
                      <div className={i === 0 ? "w-30 mx-auto mb-5 member text-center position-relative base-bg-white rounded " : "w-100 member text-center position-relative base-bg-white rounded"} data-aos="fade-up" data-aos-delay="150">
                        <div className="pic">
                          <img src={member.author_thumb} className="img-fluid team-thumb" alt={member.author_alt} />
                        </div>
                        <div className="member-info">
                          <h4>{member.author_name}</h4>
                          <span>{member.author_deg}</span>
                          <div className="social">
                            <a href="">
                              <FiTwitter className="member-social-icon"/>
                            </a>
                            <a href="">
                              <FiFacebook className="member-social-icon"/>
                            </a>
                            <a href="">
                              <FiInstagram className="member-social-icon"/>
                            </a>
                            <a href="">
                              <FiLinkedin className="member-social-icon"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  // <div className={i === 0 ? "col-12" : "col-lg-6 author-card"} key={i}>
                  //   <AuthorCard
                  //     image={member.author_thumb}
                  //     alt={member.author_alt}
                  //     name={member.author_name}
                  //     designation={member.author_deg}
                  //     bio={member.author_bio}
                  //   />
                  // </div>
                );
              })}
            {show && (
              <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h5 className="fs-22">{selectedMember.author_name}</h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{selectedMember.author_bio}</p>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardOfDirector;
