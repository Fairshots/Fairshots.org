import React from "react";
import { Col, Table, ButtonGroup, Button } from "reactstrap";

const ProjectSidebar = ({ projectInfo }) => (
    <Col md="3" className="project__sidebar justify-content-center">
        <img className="profile-picture" src="images/org-logo.png" />
        <ButtonGroup className="w-100" vertical>
            <Button className="mb-2" color="success" outline>
                Apply
            </Button>
            <Button className="mb-2 success" outline>
                Help this cause
            </Button>
        </ButtonGroup>
        <Table hover>
            <tbody>
                <tr>
                    <th scope="row">Primary Cause</th>
                    <td>Community</td>
                </tr>
                <tr>
                    <th scope="row">Application Deadline</th>
                    <td>Mark</td>
                </tr>
                <tr>
                    <th scope="row">Project Type</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">Starting Date</th>
                    <td>Larry</td>
                </tr>
            </tbody>
        </Table>
    </Col>
);

export default ProjectSidebar;
