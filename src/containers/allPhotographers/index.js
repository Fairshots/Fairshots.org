import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spinner, Pagination } from "reactstrap";
import { getAllPhotographers } from "../../actions";
import ProfileCards from "../../components/profilecards";
import FilterBox from "../../components/filterBox";
// import FilterModal from "../../components/filterBox/filterModal/filterModal";
import PaginationItem from "../../components/pagination/index";
import { causes, languages } from "../../helpers/form-data-options";

/**
 * When mounted dispatches action to fetch basic info from all photographers and display in proper
 * page routed in /photographers
 * @extends Component
 */
class AllPhotographers extends Component {
    state = {
        featuredPhotographers: [],
        morePhotographers: [],
        filteredFeatPhotographers: [],
        filteredMorePhotographers: [],
        select: "Name",
        condition: "",
        pages: [10, 30, 50, 100],
        languageValue: "",
        interestValue: "",
        skill: "",
        locationInput: "",
        dataFilteredFeat: null,
        dataFilteredMore: null
    };

    componentDidMount() {
        const { allPhotographers, doGetPhotographers, token } = this.props;
        if (!allPhotographers.photographers) {
            doGetPhotographers(token).then(() => this.separatePhotographers());
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.skill !== prevState.skill) {
            this.filterByType("Skill", this.state.skill);
        } else if (this.state.condition !== prevState.condition) {
            this.filterPhotographers(this.state.select, this.state.condition);
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.condition !== prevState.condition) {
    //         this.filterPhotographers(this.state.select, this.state.condition);
    //     }
    // }

    handleChange = event => {
        event.preventDefault();
        console.log(event.target.id, event.target.value);
        let selected = null;
        switch (event.target.id) {
            case "selectType":
                selected = "skill";
                break;
            case "selectCause":
                selected = "interestValue";
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

    separatePhotographers = () => {
        const { allPhotographers } = this.props;
        const allPhotogArray = Object.values(allPhotographers);
        console.log(allPhotogArray);
        if (allPhotogArray.length > 0) {
            const featuredPhotographers = allPhotogArray.filter(el => el && el.featured);
            const morePhotographers = allPhotogArray.filter(el => el && !el.featured);
            this.setState({
                featuredPhotographers,
                morePhotographers,
                filteredFeatPhotographers: featuredPhotographers.slice(0, 10),
                filteredMorePhotographers: morePhotographers.slice(0, 10)
            });
        }
    };

    filterByType = (type, value) => {
        let filterDataMore = null;
        let filterDataFeat = null;
        if (value === "All") {
            filterDataFeat = null;
            filterDataMore = null;
        } else {
            filterDataFeat = this.state.featuredPhotographers.filter(item => item[type] === value);
            filterDataMore = this.state.morePhotographers.filter(item => item[type] === value);
            console.log(this.state);
        }
        // else if (value === "Professional" || value === "Amateur" || value === "Student") {
        //     filterDataFeat = this.state.featuredPhotographers.filter(item => item[type] === value);
        //     filterDataMore = this.state.morePhotographers.filter(item => item[type] === value);
        //     console.log(this.state);
        // }
        this.setState({
            dataFilteredFeat: filterDataFeat,
            dataFilteredMore: filterDataMore
        });
    };

    filterPhotographers = (option, value) => {
        console.log(option);
        console.log(value);
        // If it has already been filtered by skill
        if (
            this.state.skill === "Professional" ||
            this.state.skill === "Amateur" ||
            this.state.skill === "Student"
        ) {
            // Copy of the full array for each section
            const featFilterCopy = this.state.featuredPhotographers.filter(
                el => el.Skill === this.state.skill
            );
            const moreFilterCopy = this.state.morePhotographers.filter(
                el => el.Skill === this.state.skill
            );
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
                filteredFeatPhotographers: this.state.featuredPhotographers.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                ),
                filteredMorePhotographers: this.state.morePhotographers.filter(el =>
                    el[option].toLowerCase().includes(value.toLowerCase())
                )
            });
        }
    };

    // filterPhotographers = (field, condition) => {
    //     console.log(field);
    //     console.log(condition);
    //     this.setState({
    //         filteredFeatPhotographers: this.state.featuredPhotographers.filter(el =>
    //             el[field].toLowerCase().includes(condition.toLowerCase())
    //         ),
    //         filteredMorePhotographers: this.state.morePhotographers.filter(el =>
    //             el[field].toLowerCase().includes(condition.toLowerCase())
    //         )
    //     });
    // };

    // Function to filter results depending on user's choice.
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
            if (this.state.skill === "" || this.state.skill === "All") {
                this.setState({
                    filteredMorePhotographers: this.state.morePhotographers.slice(0, pageNumber)
                });
            } else {
                this.setState({
                    dataFilteredMore: this.state.dataFilteredMore.slice(0, pageNumber)
                });
            }
        } else if (type === "featured") {
            if (this.state.skill === "" || this.state.skill === "All") {
                this.setState({
                    filteredFeatPhotographers: this.state.featuredPhotographers.slice(0, pageNumber)
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
            featuredPhotographers,
            morePhotographers,
            filteredFeatPhotographers,
            filteredMorePhotographers,
            dataFilteredMore,
            dataFilteredFeat
        } = this.state;

        let displayFeatFilterData = null;
        let displayMoreFilterData = null;
        if (!dataFilteredMore || !dataFilteredFeat) {
            displayMoreFilterData = filteredMorePhotographers;
            displayFeatFilterData = filteredFeatPhotographers;
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
                        skillType={this.state.skill}
                        currentLanguage={this.state.languageValue}
                        currentLocation={this.state.locationValue}
                        currentCause={this.state.interestValue}
                        type={["All", "Professional", "Amateur", "Student"]}
                        cause={causes}
                        language={languages}
                        // location={["Country", "Region", "City"]}
                    />
                ) : (
                    <FilterBox select={this.state.select} options={["Name", "Country"]} />
                )}
                <h2 className="feautured-h3">Featured Photographers </h2>
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

                {featuredPhotographers.length > 0 ? (
                    <ProfileCards
                        userType="photographer"
                        cards={displayFeatFilterData}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
                        }}
                    />
                ) : (
                    <Spinner type="grow" color="success" />
                )}
                <h2 className="feautured-h3">More Photographers </h2>
                <Pagination>
                    {this.state.pages.map((el, i) => (
                        <PaginationItem
                            key={i}
                            onClick={e => this.pageHandler(e, "more")}
                            pageNumber={el}
                            id={el}
                        />
                    ))}
                </Pagination>
                {morePhotographers.length > 0 ? (
                    <ProfileCards
                        userType="photographer"
                        cards={displayMoreFilterData}
                        pushHistory={id => {
                            this.props.history.push(`/photographer/${id}`);
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
    allPhotographers: state.allPhotographers,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doGetPhotographers: token => dispatch(getAllPhotographers(token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllPhotographers)
);
