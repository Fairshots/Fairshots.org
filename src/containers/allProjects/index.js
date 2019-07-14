import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllProjects } from "../../actions";
import { ProjectCards } from "../../components/projectComponents";

/**
 * When mounted dispatches action to fetch basic info from all current projects and display in proper
 * page routed in /projects
 * @extends Component
 */
class AllProjects extends Component {
    state = {
        expiredProjects: null,
        validProjects: null
    };

    componentDidMount() {
        const { doGetProjects, token } = this.props;
        doGetProjects(token);
    }

    componentDidUpdate(prevProps) {
        if (this.props.allProjects !== prevProps.allProjects) {
            this.separateExpiredandValidProjects();
        }
    }

    separateExpiredandValidProjects = () => {
        const { allProjects } = this.props;
        const currentDate = new Date();

        this.setState({
            expiredProjects: Object.values(allProjects).filter(
                val => new Date(val.ApplicationDate) < currentDate
            ),
            validProjects: Object.values(allProjects).filter(
                val => new Date(val.ApplicationDate) > currentDate
            )
        });
    };

    render() {
        const { allProjects, history } = this.props;
        const { validProjects, expiredProjects } = this.state;

        return (
            <div>
                {validProjects ? (
                    <>
                        <h2 className="feautured-h3">Open Projects </h2>
                        <ProjectCards
                            userType="project"
                            cards={validProjects} // don't take last line of redux store (error)
                            pushHistory={id => {
                                history.push(`/project/${id}`);
                            }}
                        />
                        <h2 className="feautured-h3">Past Projects </h2>
                        <ProjectCards
                            userType="project"
                            cards={expiredProjects} // don't take last line of redux store (error)
                            pushHistory={id => {
                                history.push(`/project/${id}`);
                            }}
                        />
                    </>
                ) : (
                    "Loading"
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allProjects: state.project,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetProjects: token => dispatch(getAllProjects(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllProjects)
);
