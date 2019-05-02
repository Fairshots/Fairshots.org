import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllProjects, loadProject } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 * When mounted dispatches action to fetch basic info from all current projects and display in proper
 * page routed in /projects
 * @extends Component
 */
class AllProjects extends Component {
    componentDidMount() {
        const { allProjects, doGetProjects } = this.props;
        if (!allProjects.projects) {
            doGetProjects();
        }
    }

    render() {
        const { allProjects } = this.props;
        return (
            <div>
                {allProjects.projects ? (
                    <ProfileCards
                        userType="project"
                        cards={allProjects.projects}
                        pushHistory={(proj, id) => {
                            loadProject(proj);
                            this.props.history.push(`/project/${id}`);
                        }}
                    />
                ) : (
                    "Loading"
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allProjects: state.allProjects
});
const mapDispatchToProps = dispatch => ({
    doGetProjects: () => dispatch(getAllProjects()),
    loadProject: () => true
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllProjects)
);
