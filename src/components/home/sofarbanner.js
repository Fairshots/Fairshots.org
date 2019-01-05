import React, { Component } from "react";

export default class SoFarBanner extends Component {
    render() {
        return (
            <div>
                <div className="so-far-banner">
                    <div className="so-far-div">
                        <p className="so-far-paragraph">
                            WE HAVE XX PHOTOGRAPHERS FROM AROUND THE GLOBE AND YY ORGANIzATIONS
                            LOOKING to COLLABORATE!
                        </p>
                        <p className="updates-small-paragraph">
                            FAIRSHOTS is successfully CONNECting PHOTOGRAPHERS TO NGOS in:
                        </p>
                        <br />
                        <div className="w-embed w-iframe d-flex align-items-center">
                            <iframe
                                src="https://www.google.com/maps/d/embed?mid=1BQH9E4jw_7jcauK7B4ubBwn5i-Y"
                                width="680"
                                height="480"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
