import React, { Component } from "react";


export default class Featured extends Component {
    render() {
        return (
            <div className="featured">
                <div className="collection-list-wrapper w-dyn-list">
                    <div className="w-dyn-items w-row">
                        <div data-ix="grow-on-scroll" className="w-dyn-item w-col w-col-4">
                            <a className="listing-link w-inline-block">
                                <div data-ix="hover-description" className="feauture-listing-div">
                                    <div className="hover-description-div">
                                        <div></div>
                                    </div>
                                    <div className="listing-category-box">
                                        <div></div>
                                    </div>
                                </div>
                                <div className="feature-content-div jobs">
                                    <div className="w-row">
                                        <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                                            <div className="feature-listing-author"></div>
                                        </div>
                                        <div className="w-clearfix w-col w-col-9 w-col-small-9 w-col-tiny-9">
                                            <h1 className="feature-listing-tittle"></h1>
                                            <div className="feauture-listing-subtittle"></div>
                                            <div className="feauture-based-in"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div>
                <h2 className="feautured-h3">Featured photographers</h2>
                <div className="w-dyn-list">
                    <div className="w-dyn-items w-row">
                        <div data-ix="grow-on-scroll" className="w-dyn-item w-col w-col-4">
                            <a className="listing-link w-inline-block">
                                <div data-ix="hover-description" className="feauture-listing-div">
                                    <div className="hover-description-div">
                                        <div></div>
                                    </div>
                                </div>
                                <div className="feature-content-div">
                                    <div className="w-row">
                                        <div className="w-col w-col-3 w-col-tiny-3 w-col-small-3">
                                            <div className="feature-listing-author"></div>
                                        </div>
                                        <div className="w-clearfix w-col w-col-9 w-col-tiny-9 w-col-small-9">
                                            <h1 className="feature-listing-tittle"></h1>
                                            <div className="feauture-listing-subtittle"></div>
                                            <div className="feauture-based-in"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div><a href="photographers.html" className="text-link see-all">see all available photographers</a>
                <h2 className="feautured-h3">Featured ORGANIZATIONS</h2>
                <div className="w-dyn-list">
                    <div className="w-dyn-items w-row">
                        <div data-ix="grow-on-scroll" className="dynamic-item-30 w-dyn-item w-col w-col-4">
                            <a className="listing-link w-inline-block">
                                <div data-ix="hover-description" className="feauture-listing-div organization">
                                    <div className="listing-category-box">
                                        <div></div>
                                    </div>
                                    <div className="hover-description-div">
                                        <div></div>
                                    </div>
                                </div>
                                <div className="feature-content-div organization w-clearfix">
                                    <h1 className="feature-listing-tittle organizations"></h1>
                                    <div className="feauture-based-in">Based in</div>
                                    <div className="feauture-based-in"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div><a href="organizations.html" className="text-link see-all">see all available ORGANIZATIONS</a>
            </div>
        );
    }
}
