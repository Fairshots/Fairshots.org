import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPhotographers, ThirdPartyUserProfile } from "../../actions";
import { withRouter } from "react-router-dom";

class rawDataTest extends Component {
  componentDidMount() {
    const { allPhotographers, doGetPhotographers } = this.props;
    console.log("teste", this.props);
    // if (!allPhotographers.photographers) {
    //   doGetPhotographers();
    // }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1>Testing</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Data</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rawDataTest: state.allPhotographers
});
const mapDispatchToProps = dispatch => ({
  doGetPhotographers: () => dispatch(getAllPhotographers()),
  loadThirdPartyUserProfile: profile => dispatch(ThirdPartyUserProfile(profile))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(rawDataTest)
);
