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
        if (this.state.primaryCause !== prevState.primaryCause) {
            this.filterByCause("PrimaryCause", this.state.primaryCause);
        } else if (this.state.condition !== prevState.condition) {
            this.filterOrgs(this.state.select, this.state.condition);
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.condition !== prevState.condition) {
    //         this.filterOrgs(this.state.select, this.state.condition);
    //     }
    // }

    handleChange = event => {
        event.preventDefault();
        console.log(event.target.id, event.target.value);
        let selected = null;
        switch (event.target.id) {
            case "selectCause":
                selected = "primaryCause";
                break;
            case "selectLanguage":
                selected = "languageValue";
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
            console.log(selected);
            this.setState({ [selected]: event.target.value });
        }
    };

    // handleChange = event => {
    //     event.preventDefault();
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    separateOrgs = () => {
        const { allOrgs } = this.props;
        const allOrgArray = Object.values(allOrgs);
        console.log(allOrgArray);
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

    filterByCause = (type, value) => {
        let filterDataMore = null;
        let filterDataFeat = null;
        if (value === "All") {
            filterDataFeat = null;
            filterDataMore = null;
        } else {
            filterDataFeat = this.state.featuredOrgs.map(org =>
                org[type].filter(ca => ca.toLowerCase() === value.toLowerCase())
            );
            filterDataMore = this.state.moreOrgs.map(org =>
                org[type].filter(ca => ca.toLowerCase() === value.toLowerCase())
            );
        }
        this.setState({
            dataFilteredFeat: filterDataFeat,
            dataFilteredMore: filterDataMore
        });
    };

    filterOrgs = (option, value) => {
        console.log(option);
        console.log(value);
        // If it has already been filtered by skill
        if (this.state.primaryCause !== "All" || !this.state.primaryCause) {
            // Copy of the full array for each section
            const featFilterCopy = this.state.featuredOrgs;
            // .filter(
            //     el => el.PrimaryCause === this.state.primaryCause
            // );
            console.log(featFilterCopy);
            const moreFilterCopy = this.state.moreOrgs;
            // .filter(
            //     el => el.PrimaryCause === this.state.primaryCause
            // );
            // Set state with new filtered values with the values previously filtered
            this.setState({
                dataFilteredFeat: featFilterCopy.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                ),
                dataFilteredMore: moreFilterCopy.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                )
            });
        } else {
            this.setState({
                ...this.state,
                filteredFeatOrgs: this.state.featuredOrgs.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                ),
                filteredMoreOrgs: this.state.moreOrgs.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                )
            });
        }
    };

    // filterOrgs = (field, condition) => {
    //     this.setState({
    //         filteredFeatOrgs: this.state.featuredOrgs.filter(el =>
    //             el[field].toLowerCase().includes(condition.toLowerCase())
    //         ),
    //         filteredMoreOrgs: this.state.moreOrgs.filter(el =>
    //             el[field].toLowerCase().includes(condition.toLowerCase())
    //         )
    //     });
    // };

    pageHandler = (e, type) => {
        e.preventDefault();
        console.log(type);
        console.log(e.target.id);
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
            if (this.state.primaryCause === "" || this.state.primaryCause === "All") {
                this.setState({
                    filteredMoreOrgs: this.state.moreOrgs.slice(0, pageNumber)
                });
            } else {
                this.setState({
                    dataFilteredMore: this.state.dataFilteredMore.slice(0, pageNumber)
                });
            }
        } else if (type === "featured") {
            if (this.state.primaryCause === "" || this.state.primaryCause === "All") {
                this.setState({
                    filteredFeatOrgs: this.state.featuredOrgs.slice(0, pageNumber)
                });
            } else {
                this.setState({
                    dataFilteredFeat: this.state.dataFilteredFeat.slice(0, pageNumber)
                });
            }
            // this.setState({
            //     filteredFeatPhotographers: this.state.featuredPhotographers.slice(0, pageNumber)
            // });
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
                {/* <FilterBox
                    options={["Name", "Country"]}
                    select={this.state.select}
                    condition={this.state.condition}
                    handleChange={this.handleChange}
                /> */}
                <FilterBox
                    options={["Name", "Country", "City", "Region"]}
                    select={this.state.select}
                    condition={this.state.condition}
                    handleChange={this.handleChange}
                    currentType={this.state.typeValue}
                    // currentLanguage={this.state.languageValue}
                    // currentLocation={this.state.locationValue}
                    currentCause={this.state.primaryCause}
                    // type={["All", "Professional", "Amateur", "Student"]}
                    cause={causes}
                    language={languages}
                    // location={["Country", "Region", "City"]}
                />
                <h2 className="feautured-h3">Featured Organizations </h2>
                <Pagination>
                    {this.state.pages.map((el, i) => (
                        <PaginationItem
                            key={i}
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
                    {this.state.pages.map((el, i) => (
                        <PaginationItem
                            key={i}
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
