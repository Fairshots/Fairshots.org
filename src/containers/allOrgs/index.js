import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner, Pagination } from "reactstrap";
import { getAllOrgs } from "../../actions";
import ProfileCards from "../../components/profilecards";
import FilterBox from "../../components/filterBox";
import { causes, languages } from "../../helpers/form-data-options";
import PaginationItem from "../../components/pagination/index";

/**
 * When mounted dispatches action to fetch basic info from all Orgs and display in proper page routed in /organizations
 * @extends Component
 */
class AllOrgs extends Component {
    state = {
        featuredOrgs: [],
        moreOrgs: [],
        filteredFeatOrgs: [],
        filteredMoreOrgs: [],
        select: "Name",
        condition: "",
        primaryCause: "",
        languages: "",
        dataFilteredFeat: null,
        dataFilteredMore: null,
        pages: [10, 30, 50, 100]
    };

    componentDidMount() {
        const { allOrgs, doGetOrgs, token } = this.props;
        if (!allOrgs.organizations) {
            doGetOrgs(token).then(() => this.separateOrgs());
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.state.primaryCause !== prevState.primaryCause ||
            this.state.languages !== prevState.languages ||
            this.state.condition !== prevState.condition
        ) {
            this.filteringData();
        }
    }

    handleChange = event => {
        event.preventDefault();
        let selected = null;
        switch (event.target.id) {
            case "selectCause":
                selected = "primaryCause";
                break;
            case "selectLanguage":
                selected = "languages";
                break;
            case "filterSelect":
                selected = "select";
                break;
            case "filter":
                selected = "condition";
                break;
            default:
                break;
        }
        if (selected) {
            this.setState({ [selected]: event.target.value });
        }
    };

    separateOrgs = () => {
        const { allOrgs } = this.props;
        const allOrgArray = Object.values(allOrgs);
        if (allOrgArray.length > 0) {
            const featuredOrgs = allOrgArray.filter(el => el && el.featured);
            const moreOrgs = allOrgArray.filter(el => el && !el.featured);
            this.setState({
                featuredOrgs,
                moreOrgs,
                filteredFeatOrgs: featuredOrgs.slice(0, 10),
                filteredMoreOrgs: moreOrgs.slice(0, 10)
            });
        }
    };

    filteringData = () => {
        let filteredItemsFeat = this.state.featuredOrgs;
        let filteredItemsMore = this.state.moreOrgs;
        const { state } = this;
        const filterProperties = ["primaryCause", "languages", "condition"];
        filterProperties.forEach(filterBy => {
            const filterValue = state[filterBy];
            if (filterValue) {
                if (filterBy === "languages") {
                    console.log("hey")
                    filteredItemsFeat = filteredItemsFeat.filter(item =>
                        item.Languages
                            ? item.Languages.find(
                                  i => i.toLowerCase() === filterValue.toLowerCase()
                              )
                            : true
                    );
                    filteredItemsMore = filteredItemsMore.filter(item =>
                        item.Languages
                            ? item.Languages.find(
                                  l => l.toLowerCase() === filterValue.toLowerCase()
                              )
                            : true
                    );
                }
                if (filterBy === "primaryCause") {
                    filteredItemsFeat = filteredItemsFeat.filter(
                        item => item.PrimaryCause === filterValue
                    );
                    filteredItemsMore = filteredItemsMore.filter(
                        item => item.PrimaryCause === filterValue
                    );
                }
                if (filterBy === "condition") {
                    filteredItemsFeat = filteredItemsFeat.filter(item =>
                        item[this.state.select].toLowerCase().includes(filterValue.toLowerCase())
                    );
                    filteredItemsMore = filteredItemsMore.filter(item =>
                        item[this.state.select].toLowerCase().includes(filterValue.toLowerCase())
                    );
                }
            }
            this.setState({
                ...state,
                dataFilteredFeat: filteredItemsFeat,
                dataFilteredMore: filteredItemsMore
            });
        });
    };

    pageHandler = (e, type) => {
        e.preventDefault();
        let filterId = null;
        switch (e.target.id) {
            case "10":
                filterId = 10;
                break;
            case "30":
                filterId = 30;
                break;
            case "50":
                filterId = 50;
                break;
            case "100":
                filterId = 100;
                break;
            default:
                filterId = null;
                break;
        }
        if (filterId) {
            this.changePageHandler(filterId, type);
        }
    };

    changePageHandler = (pageNumber, type) => {
        if (type === "more") {
            if (!this.state.dataFilteredMore) {
                this.setState({
                    filteredMoreOrgs: this.state.moreOrgs.slice(0, pageNumber)
                });
            } else {
                this.setState({
                    dataFilteredMore: this.state.dataFilteredMore.slice(0, pageNumber)
                });
            }
        } else if (type === "featured") {
            if (!this.state.dataFilteredFeat) {
                this.setState({
                    filteredFeatOrgs: this.state.featuredOrgs.slice(0, pageNumber)
                });
            } else {
                this.setState({
                    dataFilteredFeat: this.state.dataFilteredFeat.slice(0, pageNumber)
                });
            }
        }
    };

    render() {
        const {
            featuredOrgs,
            moreOrgs,
            filteredFeatOrgs,
            filteredMoreOrgs,
            dataFilteredMore,
            dataFilteredFeat
        } = this.state;

        let displayFeatFilterData = null;
        let displayMoreFilterData = null;
        if (!dataFilteredMore || !dataFilteredFeat) {
            displayMoreFilterData = filteredMoreOrgs;
            displayFeatFilterData = filteredFeatOrgs;
        } else {
            displayMoreFilterData = dataFilteredMore;
            displayFeatFilterData = dataFilteredFeat;
        }

        return (
            <div>
                {this.props.token ? (
                    <FilterBox
                        options={["Name", "Country", "City", "Region"]}
                        select={this.state.select}
                        condition={this.state.condition}
                        handleChange={this.handleChange}
                        currentType={this.state.typeValue}
                        currentCause={this.state.primaryCause}
                        cause={causes}
                        language={languages}
                    />
                ) : (
                    <FilterBox
                        handleChange={this.handleChange}
                        select={this.state.select}
                        options={["Name", "Country"]}
                    />
                )}
                <h2 className="feautured-h3">Featured Organizations </h2>
                <Pagination>
                    {this.state.pages.map(el => (
                        <PaginationItem
                            key={el}
                            pageNumber={el}
                            onClick={e => this.pageHandler(e, "featured")}
                            id={el}
                        />
                    ))}
                </Pagination>
                {featuredOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={displayFeatFilterData}
                        pushHistory={id => {
                            this.props.history.push(`/organization/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Organizations </h2>
                <Pagination>
                    {this.state.pages.map(el => (
                        <PaginationItem
                            key={el}
                            pageNumber={el}
                            onClick={e => this.pageHandler(e, "featured")}
                            id={el}
                        />
                    ))}
                </Pagination>
                {moreOrgs ? (
                    <ProfileCards
                        userType="organization"
                        cards={displayMoreFilterData}
                        pushHistory={id => {
                            this.props.history.push(`/organization/${id}`);
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
    allOrgs: state.allOrgs,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetOrgs: token => dispatch(getAllOrgs(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllOrgs)
);
