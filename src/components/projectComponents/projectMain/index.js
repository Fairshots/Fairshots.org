import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
// import Gallery from "../../gallery";
import ImageGallery from "react-image-gallery";
import ProfileCards from "../../profilecards";

const ProjectMain = ({ projectInfo, userType, pushHistory }) => {
    const slides = projectInfo.Photos.map(item => ({
        original: item.cloudlink,
        thumbnail: item.cloudlink
    }));

    return (
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
                    {/*
                    projectInfo.Photos[0] && <Gallery imageArray={projectInfo.Photos} /> */
                    projectInfo.Photos[0] && <ImageGallery items={slides} />}
                </Row>

                {userType === "owner" && projectInfo.Photographers.length > 0 && (
                    <>
                        <Row className="listing-subtittle page mt-3">Applicants</Row>

                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Application answers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectInfo.Photographers.map(p => (
                                    <tr
                                        style={{ cursor: "pointer" }}
                                        onClick={() => pushHistory(p.id)}
                                    >
                                        <td>
                                            <img src={p.ProfilePic} width="128" />
                                        </td>
                                        <td>{p.Name}</td>
                                        <td>
                                            {Object.values(p.Application).map(v => (
                                                <p>{v}</p>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </>
                )}
            </Container>
        </Col>
    );
};

export default ProjectMain;
