import React from "react";
import { Col, Row, Table } from "reactstrap";
import ProjButtons from "./projButtons";

const ProjectSidebar = ({ projectInfo, userType, toggleModal }) => {
    const currentDate = new Date();
    const applicationDate = new Date(projectInfo.ApplicationDate);
    const projectExpired = applicationDate < currentDate;
    return (
        <Col md="3" className="project__sidebar justify-content-center">
            <img className="profile-picture" src="images/org-logo.png" />
            <ProjButtons
                userType={userType}
                toggleModal={toggleModal}
                projectExpired={projectExpired}
            />
            {projectExpired && (
                <Row className="justify-content-center" style={{ color: "red" }}>
                    This project is no longer accepting applications
                </Row>
            )}
            <Table hover>
                <tbody>
                    <tr>
                        <th scope="row">Primary Cause</th>
                        <td>{projectInfo.Cause}</td>
                    </tr>
                    <tr>
                        <th scope="row">Photographers Needed</th>
                        <td>{projectInfo.PhotographersNeeded}</td>
                    </tr>
                    <tr>
                        <th scope="row">Experience required</th>
                        <td>
                            {projectInfo.ProfessionalOnly
                                ? "Professional Only"
                                : "Students Welcome"}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Application Deadline</th>
                        <td>{new Date(projectInfo.ApplicationDate).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Starting Date</th>
                        <td>{new Date(projectInfo.StartingDate).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Duration</th>
                        <td>{`${projectInfo.Duration} days`}</td>
                    </tr>
                    <tr>
                        <th scope="row">Delivery Deadline</th>
                        <td>{new Date(projectInfo.Delivery).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Location</th>
                        <td>{`${projectInfo.City}, ${projectInfo.Country}`}</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    );
};

export default ProjectSidebar;
