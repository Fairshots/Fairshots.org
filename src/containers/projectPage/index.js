import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Modal, ModalBody, Button, ButtonGroup } from "reactstrap";
import { ProjectSidebar, ProjectMain } from "../../components/projectComponents";
import { getProject, applyProject, updPhotoOrd } from "../../actions";
import UpdateProject from "./updateProject";
import ApplytoProject from "./applytoProject";
import PhotoGallery from "../../components/photoOrganizer/photoGallery";
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
    const orderChanged = photos => {
        let result = false;
        props.project[projId].Photos.forEach(val => {
            if (
                !photos.find(
                    curVal =>
                        curVal.id === val.id &&
                        curVal.cloudlink === val.cloudlink &&
                        curVal.portfolioOrder === val.portfolioOrder
                )
            ) {
                result = true;
            }
        });
        return result;
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
            case "ORGANIZE_PHOTOS": {
                const {
                    userType,
                    userId = userProfile.id,
                    token,
                    project,
                    doUpdatePhotoOrder
                } = props;

                const sortedPhotos = Array.prototype.slice.call(project[projId].Photos).sort(
                    (a, b) => (a.portfolioOrder >= b.portfolioOrder ? 1 : -1));

                const indexes = sortedPhotos.map(photo => photo.portfolioOrder);

                const setIndexes = (oldIdx, newIdx) => {
                    const temp = indexes[oldIdx];
                    indexes[oldIdx] = indexes[newIdx];
                    indexes[newIdx] = temp;
                };
                return (
                    <div>
                        <PhotoGallery
                            photos={sortedPhotos.map(photo => ({
                                src: photo.cloudlink,
                                width: 1,
                                height: 1
                            }))}
                            setIdxs={setIndexes}
                        />

                        <ButtonGroup className="w-100">
                            <Button
                                className="mb-2"
                                color="success"
                                outline
                                onClick={() => {
                                    const resArr = sortedPhotos.map((val, idx) => ({
                                        id: val.id,
                                        cloudlink: val.cloudlink,
                                        portfolioOrder: indexes[idx]
                                    }));
                                    if (orderChanged(resArr)) {
                                        doUpdatePhotoOrder(userType, userId, token, resArr);
                                        setModalState({ ...modalState, show: false });
                                    }
                                }}
                            >
                                Update
                            </Button>

                            <Button
                                className="mb-2"
                                color="success"
                                outline
                                onClick={() => setModalState({ ...modalState, show: false })}
                            >
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </div>
                );
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
                        alreadyApplied={
                            props.userType !== "organization" &&
                            userProfile.Projects.length > 0 &&
                            userProfile.Projects.map(
                                proj => proj.id === parseInt(projId, 10)
                            ).reduce((acc, el) => acc || el)
                        }
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
        dispatch(applyProject(projId, userId, questionAnswers, token)),
    doUpdatePhotoOrder: (userType, userId, token, photos) =>
        dispatch(updPhotoOrd(userType, userId, token, photos))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectPage)
);
