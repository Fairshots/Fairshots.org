import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { getAllPhotographers } from "../../actions";
import ProfileCards from "../../components/profilecards";

import "./allPhotographers.scss";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    state = {
        featuredPhotographers: [],
        morePhotographers: []
    };

    componentDidMount() {
        const { allPhotographers, doGetPhotographers, token } = this.props;
        if (!allPhotographers.photographers) {
            doGetPhotographers(token).then(() => this.separatePhotographers());
        }
    }

    separatePhotographers = () => {
        const { allPhotographers } = this.props;
        const allPhotogArray = Object.values(allPhotographers);
        if (allPhotogArray.length > 0) {
            this.setState({
                featuredPhotographers: allPhotogArray.filter(el => el.featured),
                morePhotographers: allPhotogArray.filter(el => !el.featured)
            });
        }
    };

    render() {
        const { allPhotographers } = this.props;
        const { featuredPhotographers, morePhotographers } = this.state;
        return (
            <div>
                <Form>
                    <FormGroup row className="filter-row row justify-content-end">
                        <Label for="exampleSelect" sm={1}>
                            Filter by:
                        </Label>
                        <Col sm={1}>
                            <Input type="select" name="select" id="exampleSelect" />
                        </Col>
                        <Col sm={2}>
                            <Input type="text" id="filter" placeholder="Filter" />
                        </Col>
                    </FormGroup>
                </Form>
                <h2 className="feautured-h3">Featured Photographers </h2>
                {featuredPhotographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={featuredPhotographers}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Photographers </h2>
                {featuredPhotographers ? (
                    <ProfileCards
                        userType="photographer"
                        cards={morePhotographers}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allPhotographers: state.allPhotographers,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetPhotographers: token => dispatch(getAllPhotographers(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllPhotographers)
);
