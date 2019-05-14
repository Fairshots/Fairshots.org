import React, { Component } from "react";
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg,
    CardImgOverlay,
    CardBody
} from "reactstrap";

import "./profilecards.scss";

/**
 * Renders a deck of cards. Each one has basic profile info to be showed
 * @extends Component
 * @author [leovcunha](https://github.com/leovcunha)
 */
export default class ProfileCards extends Component {
    /**
     *  profile cards constructor
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
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setState({
                        zoomDeck: {
                            transform: "scaleX(1) scaleY(1) scaleZ(1)",
                            transition: "transform 1500ms ease 0s"
                        }
                    });
                } else {
                    this.setState({
                        zoomDeck: {
                            transform: "scaleX(0.85) scaleY(0.85) scaleZ(1)",
                            transition: "transform 1500ms ease 0s"
                        }
                    });
                }
            });
        };

        this.observer = new IntersectionObserver(handleScroll, {
            root: null, // indicates root component or viewport
            rootMargin: "0px",
            threshold: 0 // once inside the viewport triggers the callback
        });
    }

    componentDidMount() {
        this.observer.observe(this.ref.current);
    }

    componentWillUnMount() {
        this.observer = null;
    }

    render() {
        const { cards } = this.props;
        const { zoomDeck } = this.state;

        return (
            <div className="card-deck" ref={this.ref}>
                {cards.map(card => (
                    <Card key={card.id} style={zoomDeck}>
                        <div className="card-img-top-holder">
                            <CardImg
                                top
                                src={
                                    card.Photos && card.Photos[0]
                                        ? card.Photos[0].cloudlink
                                        : card.ProfilePic || card.Logo
                                }
                                alt="card img cap"
                            />
                            <CardImgOverlay
                                className="feat-biography"
                                onClick={() => this.props.pushHistory(card, card.id)}
                            >
                                <p>{card.Biography || card.Background}</p>
                            </CardImgOverlay>
                        </div>
                        <CardBody>
                            <CardImg className="feat-pic" src={card.ProfilePic || card.Logo} />
                            <CardTitle>{card.Name}</CardTitle>
                            {card.skill && <CardSubtitle>{orgInfo.Name}</CardSubtitle>}
                            <CardText>{card.Country}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }
}
