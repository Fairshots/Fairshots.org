import React, { Component } from "react";

export default class BePart extends Component {
    render() {
        return (
            <div class="content-section">
                <div class="w-container">
                    <h3 class="portfolio-tittle">BE PART OF THE CHANGE</h3>
                    <p>Joining Fairshots is free, easy and open to photographers and organizations anywhere around the world. Start by clicking the button below that is most relevant to you. Easy Peasy.</p>
                    <div data-duration-in="300" data-duration-out="100" class="w-tabs">
                        <div class="register-tab-menu w-tab-menu">
                            <a data-w-tab="Tab 1" class="tab-link register w-inline-block w-tab-link">
                                <div>JOIN AS AN organization</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" class="tab-arrow"/></a>
                            <a data-w-tab="Tab 2" class="tab-link register w-inline-block w-tab-link">
                                <div>JOIN AS a photographer</div><img src="images/Dark_Green_Arrow_Up.png" data-ix="tab-arrow" class="tab-arrow"/></a>
                        </div>
                        <div class="w-tab-content">
                            <div data-w-tab="Tab 1" class="w-tab-pane">
                                <div class="external-forms w-embed w-script">
                                    <script type="text/javascript" src="https://form.jotform.co/jsform/61306893090860"></script>
                                </div>
                            </div>
                            <div data-w-tab="Tab 2" class="w-tab-pane">
                                <div class="external-forms w-embed w-script">
                                    <script type="text/javascript" src="https://form.jotform.co/jsform/61303237479860"></script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
