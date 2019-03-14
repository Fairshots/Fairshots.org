import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllPhotographers, ThirdPartyUserProfile } from "../../actions";
import ProfileCards from "../../components/profilecards";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
  componentDidMount() {
    const { allPhotographers, doGetPhotographers } = this.props;
    if (!allPhotographers.photographers) {
      doGetPhotographers();
    }
  }

  render() {
    const { allPhotographers, loadThirdPartyUserProfile } = this.props;
    return (
      <div>
        {allPhotographers.photographers ? (
          <ProfileCards
            userType="organization"
            cards={allPhotographers.photographers}
            pushHistory={(profile, id) => {
              loadThirdPartyUserProfile(profile);
              this.props.history.push(`/photographer/${id}`);
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
  allPhotographers: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
  doGetPhotographers: () => dispatch(getAllPhotographers()),
  loadThirdPartyUserProfile: profile => dispatch(ThirdPartyUserProfile(profile))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllPhotographers)
);
