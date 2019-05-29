import React from "react";
import { Container, Row, Col } from "reactstrap";
import Gallery from "../../gallery";

const ProjectMain = ({ projectInfo }) => (
    <Col md="9" className="project__main">
        <Container fluid>
            <Row className="justify-content-center">
                <h1 className="green-tittle">{projectInfo.Title}</h1>
            </Row>
            <Row>
                <h5 className="general-paragraph">{projectInfo.Description}</h5>
            </Row>
            <Row className="listing-subtittle page mt-3">Funding</Row>
            <Row className="general-paragraph">
                {// eslint-disable-next-line no-nested-ternary
                projectInfo.FundsFairshot ? (
                    <>
                        <Col>
                            project will be funded by
                            <img src="images/Fair-shotsV3.png" />
                        </Col>
                    </>
                ) : projectInfo.FundsAvailable === "no" ? (
                    "There are no funds available for this project"
                ) : (
                    projectInfo.FundsDetails
                )}
            </Row>

            {projectInfo.Photos[0] && (
                <Row className="listing-subtittle page mt-3">Visual References</Row>
            )}
            <Row className="justify-content-center">
                {projectInfo.Photos[0] && <Gallery imageArray={projectInfo.Photos} />}
            </Row>
        </Container>
    </Col>
);

export default ProjectMain;
