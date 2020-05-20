import React, { Component } from "react";
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg,
    CardImgOverlay,
    CardBody,
    Badge
} from "reactstrap";

import "./projectcards.scss";

/**
 * Renders a deck of cards. Each one has basic project info
 * @extends Component
 * @author [leovcunha](https://github.com/leovcunha)
 */
export default class ProjectCards extends Component {
    /**
     *  project cards constructor
     * @param {Object[]}props.cards - array of objects card infos
     */
    constructor(props) {
        super(props);
        this.state = {
            zoomDeck: {
                transform: "scaleX(0.85) scaleY(0.85) scaleZ(1)",
                transition: "transform 800ms ease 0s"
            }
        };
        this.ref = React.createRef();

        /**
         * Callback function called when an element observed by the Intersection Observer API is
         * inside the threshold of the ViewPort
         * @param {Object[]} entries
         */
        const handleScroll = entries => {
            console.log(entries[0].intersectionRatio);
            if (entries[0].intersectionRatio > 0.1) {
                this.setState({
                    zoomDeck: {
                        transform: "scaleX(1) scaleY(1) scaleZ(1)",
                        transition: "transform 800ms ease 0s"
                    }
                });
            } else {
                this.setState({
                    zoomDeck: {
                        transform: "scaleX(0.85) scaleY(0.85) scaleZ(1)",
                        transition: "transform 800ms ease 0s"
                    }
                });
            }
        };

        this.observer = new IntersectionObserver(handleScroll, {
            root: null, // indicates root component or viewport
            rootMargin: "0px",
            threshold: [0, 0.02, 0.1, 0.2] // once inside the viewport triggers the callback
        });
    }

    componentDidMount() {
        this.observer.observe(this.ref.current);
    }

    componentWillUnMount() {
        this.observer = null;
    }

    render() {
        const { cards, orgsInfo } = this.props;
        const { zoomDeck } = this.state;
        console.log(cards);

        return (
            <div className="proj-card-deck row" ref={this.ref}>
                {cards.length ? (
                    cards.map(card => (
                        <Card key={card.id} style={zoomDeck}>
                            <div className="card-img-top-holder">
                                <CardImg
                                    top
                                    src={
                                        card.Photos && card.Photos[0]
                                            ? card.Photos[0].cloudlink
                                            : "images/org-logo.png"
                                    }
                                    alt="card img cap"
                                />
                                <CardImgOverlay
                                    className="feat-biography"
                                    onClick={() => this.props.pushHistory(card.id)}
                                >
                                    <p>{card.Description}</p>
                                </CardImgOverlay>
                            </div>
                            <CardBody>
                                <CardTitle>{card.Title}</CardTitle>
                                <CardSubtitle>
                                    {card.Organization ? card.Organization.Name : orgsInfo.Name}
                                </CardSubtitle>
                                <CardText>{`${card.City || ""}${card.City ? "," : ""} ${
                                    card.Country
                                }`}</CardText>
                            </CardBody>
                            <p id="cause-badge">
                                <Badge color="success" pill>
                                    {card.Cause}
                                </Badge>
                            </p>
                        </Card>
                    ))
                ) : (
                    <p>No projects here yet</p>
                )}
            </div>
        );
    }
}
