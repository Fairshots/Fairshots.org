import React, { Component } from "react";

export default class SoFarBanner extends Component {
    render() {
        return (
            <div>
                <div className="so-far-banner">
                    <div className="so-far-div w-clearfix">
                        <p className="so-far-paragraph">WE HAVE 37 PHOTOGRAPHERS FROM AROUND THE GLOBE  AND 16 ORGANIzATIONS LOOKING to COLLABORATE!</p>
                        <p className="updates-small-paragraph">FAIRSHOTS is successfully CONNECting PHOTOGRAPHERS TO  NGOS in:</p>
                        <div className="dynamic-countries-list w-dyn-list">
                            <div className="w-clearfix w-dyn-items">
                                <div className="dynamic-countries-list w-clearfix w-dyn-item"><a className="get-country"></a>
                                    <div className="get-country">,</div>
                                </div>
                            </div>
                            <div className="w-dyn-empty">
                                <p>No items found.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
