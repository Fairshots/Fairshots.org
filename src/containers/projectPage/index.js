import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Modal, ModalBody } from "reactstrap";
import { ProjectSidebar, ProjectMain } from "../../components/projectComponents";
import { getProject, applyProject } from "../../actions";
import UpdateProject from "./updateProject";
import ApplytoProject from "./applytoProject";
import "./projectPage.scss";

/**
 * This container component holds and handle information about project
 * @extends Component
 */
const ProjectPage = props => {
    const {
        match: {
            params: { projId }
        },
        userProfile,
        history
    } = props;
    const [modalState, setModalState] = useState({ show: false, type: "UPDATE_PROJECT" });

    useEffect(() => {
        props.getProjectInfo(projId, props.token);
    }, []);

    useEffect(() => setModalState({ ...modalState, show: false }), [props.project[projId]]);

    const pushHistoryProfile = id => {
        history.push(`/photographer/${id}`);
    };
    /**
     * Controls which type of content to load inside Modal asked to be open
     * @param {*} type
     */
    const projModalContent = type => {
        switch (type) {
            case "UPDATE_PROJECT": {
                return <UpdateProject />;
            }
            case "APPLICATION": {
                return (
                    <ApplytoProject
                        Question1={props.project[projId].Question1}
                        Question2={props.project[projId].Question3}
                        Question3={props.project[projId].Question2}
                        applyProject={answers =>
                            props.applyToProject(projId, props.authId, answers, props.token)
                        }
                    />
                );
            }

            default:
                return undefined;
        }
    };

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
                        toggleModal={setModalState}
                        alreadyApplied={userProfile.Projects.map(
                            proj => proj.id === parseInt(projId, 10)
                        ).reduce((acc, el) => acc || el)}
                    />
                    <ProjectMain
                        projectInfo={props.project[projId]}
                        userType={
                            props.authId === props.project[projId].organizationId
                                ? "owner"
                                : props.userType
                        }
                        pushHistory={pushHistoryProfile}
                    />
                </Row>
            )}
            <Modal
                isOpen={modalState.show}
                toggle={() => setModalState({ ...modalState, show: !modalState.show })}
                size="lg"
            >
                <ModalBody>{projModalContent(modalState.type)}</ModalBody>
            </Modal>
        </Container>
    );
};

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    authId: state.auth.user.userId,
    project: state.project,
    userType: state.auth.user.userType,
    allPhotographers: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
    getProjectInfo: (id, token) => dispatch(getProject(id, token)),
    applyToProject: (projId, userId, questionAnswers, token) =>
        dispatch(applyProject(projId, userId, questionAnswers, token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectPage)
);
