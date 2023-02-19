import AuthorCard from "#components/common/AuthorCard";
import Loader from "#components/common/Loader/Loader";
import AuthorModalTitle from "#components/common/modal/AuthorModal";
import CONFIGS from "#configs/index";
import { DirectorInterface } from "#interfaces/index";
import headingTitle from "#mocks/jsonData/subheading.json";
import { useGetDirectorQuery } from "#store/api/director";
import Output from "editorjs-react-renderer";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const BoardOfDirector = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const handleClose = () => setShow(false);
  const handleShow = (data: any) => {
    setSelectedMember(data);
    setShow(true);
  };

  const { data: directors, isLoading, isError, error } = useGetDirectorQuery("/v1/teams?populate=*&filters[role][$eq]=director&sort=priority:ASC");
  console.log({ directors });

  return (
    <>
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center">
            <h2 className="sub-header-title font-Poppins fw-bold">{headingTitle.sub_heading.board_title}</h2>
          </div>
        </div>
      </section>

      {isLoading && !isError ? (
        <Loader />
      ) : (
        <section id="team" className="team section-gap base-bg-light">
          <div className="container">
            <div className="row gy-3">
              {(directors?.data as DirectorInterface[]) &&
                (directors?.data as DirectorInterface[])?.map((director: DirectorInterface, i: number) => {
                  return (
                    <AuthorCard
                      index={i}
                      image={CONFIGS.CMS_URL + director.attributes.image.data.attributes.formats.thumbnail.url}
                      name={director.attributes.name}
                      designation={director.attributes.designation}
                      content={director.attributes.content}
                      handleShow={handleShow}
                      director={director}
                    />
                  );
                })}
              {show && (
                <Modal className="team-modal" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header closeButton className="px-4 pt-4">
                    <Modal.Title>
                      <AuthorModalTitle
                        image={CONFIGS.CMS_URL + selectedMember.attributes.image.data.attributes.formats.thumbnail.url}
                        name={selectedMember.attributes.name}
                        designation={selectedMember.attributes.designation}
                      />
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="px-4 pt-4">
                    <Output data={JSON.parse(selectedMember.attributes.content)} />
                  </Modal.Body>
                </Modal>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BoardOfDirector;
