import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Modal, ModalBody } from "reactstrap";
import { ProjectSidebar, ProjectMain } from "../../components/projectComponents";
import { getProject } from "../../actions";
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
        }
    } = props;
    const [modalState, setModalState] = useState({ show: false, type: "UPDATE_PROJECT" });

    useEffect(() => {
        props.getProjectInfo(projId, props.token);
    }, []);

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
                return <ApplytoProject />;
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
                    />
                    <ProjectMain projectInfo={props.project[projId]} />
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
