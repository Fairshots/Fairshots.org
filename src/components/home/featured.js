import React, { Component } from "react";
import {
    Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody, Button, CardDeck
} from "reactstrap";

export default class Featured extends Component {
    render() {
        const { feats } = this.props;
        return (
            <div className="featured">

                <h2 className="feautured-h3">Featured photographers</h2>
                <CardDeck>
                    {
                        feats
                            ? feats.photographers.map(photographer => (<Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>)) : "Loading..."
                    }

                </CardDeck>

                <a href="photographers.html" className="text-link see-all">see all available photographers</a>

                <h2 className="feautured-h3">Featured ORGANIZATIONS</h2>
                <a href="organizations.html" className="text-link see-all">see all available ORGANIZATIONS</a>
            </div>
        );
    }
}
