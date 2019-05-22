import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { ProjectSidebar, ProjectMain } from "../../components/projectComponents";
import { getProject } from "../../actions";
import "./projectPage.scss";

/**
 * This container component holds and handle information about project
 * @extends Component
 */
const ProjectPage = props => {
    const {
        match: {
            params: { projId }
        }
    } = props;

    useEffect(() => {
        props.getProjectInfo(projId, props.token);
    }, []);

    return (
        <Container className="project" fluid>
            {props.project[projId] && (
                <Row className="justify-content-between">
                    <ProjectSidebar
                        projectInfo={props.project[projId]}
                        userType={
                            props.authId === props.project[projId].organizationId
                                ? "owner"
                                : props.userType
                        }
                    />
                    <ProjectMain projectInfo={props.project[projId]} />
                </Row>
            )}
        </Container>
    );
};

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    authId: state.auth.user.userId,
    project: state.project,
    userType: state.auth.user.userType
});
const mapDispatchToProps = dispatch => ({
    getProjectInfo: (id, token) => dispatch(getProject(id, token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectPage)
);
