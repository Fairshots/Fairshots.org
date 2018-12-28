import React, { Component } from "react";
import {
    Card, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, CardBody, Button, CardDeck
} from "reactstrap";


import "./profilecards.scss";

export default class ProfileCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomDeck: {
                transform: "scaleX(0.85) scaleY(0.85) scaleZ(1)",
                transition: "transform 800ms ease 0s"
            }
        };
    }

    componentDidMount() {
        window.onscroll = () => {
            if (window.scrollY <= 100) {
                this.setState({
                    zoomDeck: {
                        transform: "scaleX(0.85) scaleY(0.85) scaleZ(1)",
                        transition: "transform 800ms ease 0s"
                    }
                });
            } else if (window.scrollY >= 100) {
                this.setState({
                    zoomDeck: {
                        transform: "scaleX(1) scaleY(1) scaleZ(1)",
                        transition: "transform 800ms ease 0s"
                    }
                });
            }
        };
    }

    componentWillUnmount() {
        window.onscroll = null;
    }


    render() {
        const { cards } = this.props;
        const { zoomDeck } = this.state;

        return (
            <CardDeck>
                {
                    cards
                        ? cards.map(card => (<Card
                            key={card.id} style={zoomDeck}>
                            <div className="card-img-top-holder">
                                <CardImg top src={card.Photos.length > 1 ? card.Photos[0] : (card.ProfilePic || card.Logo) } alt="Card image cap" />
                                <CardImgOverlay className="feat-biography">
                                    <p>{card.Biography || card.Background}</p>
                                </CardImgOverlay>
                            </div>
                            <CardBody>
                                <CardImg className="feat-pic" src={card.ProfilePic}/>
                                <CardTitle>{card.Name}</CardTitle>
                                <CardSubtitle>{`${card.Skill} card` }</CardSubtitle>
                                <CardText>{card.Country}</CardText>
                            </CardBody>
                        </Card>)) : "Loading..."
                }

            </CardDeck>

        );
    }
}
