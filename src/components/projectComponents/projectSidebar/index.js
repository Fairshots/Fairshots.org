import React from "react";
import { Col, Table, ButtonGroup, Button } from "reactstrap";

const ProjectSidebar = ({ projectInfo }) => (
    <Col md="3" className="project__sidebar justify-content-center">
        <img className="profile-picture" src="images/org-logo.png" />
        <ButtonGroup className="w-100" vertical>
            <Button className="mb-2" color="success" outline>
                Apply
            </Button>
            <Button className="mb-2" color="success" outline>
                Help this cause
            </Button>
        </ButtonGroup>
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
                        {projectInfo.ProfessionalOnly ? "Professional Only" : "Students welcome"}
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
                    <td>{projectInfo.Duration}</td>
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

export default ProjectSidebar;
