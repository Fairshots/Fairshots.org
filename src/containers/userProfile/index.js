import React, { Component } from "react";
import { connect } from "react-redux";
import { } from "reactstrap";
import { Link } from "react-router-dom";

import "./userProfile.scss";

/**
 *
 */
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="col-sm-4">
                     One of two columns
                    </div>
                    <div class="col-sm-8">
                     One of two columns
                    </div>

                </div>
                <div className="row">
                    <div class="col-sm-4">
                     One of two columns
                    </div>
                    <div class="col-sm-8">
                     One of two columns
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
