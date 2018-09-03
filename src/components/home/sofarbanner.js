import React, { Component } from "react";

export default class SoFarBanner extends Component {
    render() {
        return (
            <div>
                <div class="so-far-banner">
                    <div class="so-far-div w-clearfix">
                        <p class="so-far-paragraph">WE HAVE 37 PHOTOGRAPHERS FROM AROUND THE GLOBE  AND 16 ORGANIzATIONS LOOKING to COLLABORATE!</p>
                        <p class="updates-small-paragraph">FAIRSHOTS is successfully CONNECting PHOTOGRAPHERS TO  NGOS in:</p>
                        <div class="dynamic-countries-list w-dyn-list">
                            <div class="w-clearfix w-dyn-items">
                                <div class="dynamic-countries-list w-clearfix w-dyn-item"><a class="get-country"></a>
                                    <div class="get-country">,</div>
                                </div>
                            </div>
                            <div class="w-dyn-empty">
                                <p>No items found.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
