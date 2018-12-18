import React, { Component } from "react";
import {
    Card, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, CardBody, Button, CardDeck
} from "reactstrap";

import "./featured.scss";

export default function Featured(props) {
    const { feats } = props;
    return (
        <div className="featured">

            <h2 className="feautured-h3">Featured photographers</h2>
            <CardDeck>
                {
                    feats.photographers
                        ? feats.photographers.map(photographer => (<Card
                            key={photographer.id}>
                            <div className="card-img-top-holder">
                                <CardImg top src={photographer.Photos.length > 1 ? photographer.Photos[0] : photographer.ProfilePic} alt="Card image cap" />
                                <CardImgOverlay className="feat-biography">
                                    <CardSubtitle >{photographer.Biography}</CardSubtitle>
                                </CardImgOverlay>
                            </div>
                            <CardBody>
                                <CardImg className="feat-pic" src={photographer.ProfilePic}/>
                                <CardTitle>{photographer.Name}</CardTitle>
                                <CardSubtitle>{`${photographer.Skill} Photographer` }</CardSubtitle>
                                <CardText>{photographer.Country}</CardText>
                            </CardBody>
                        </Card>)) : "Loading..."
                }

            </CardDeck>

            <a href="photographers.html" className="text-link see-all">see all available photographers</a>

            <h2 className="feautured-h3">Featured ORGANIZATIONS</h2>

            <CardDeck>
                {
                    feats.organizations
                        ? feats.organizations.map(org => (<Card key={org.id}
                        >
                            <CardImg top width="100%" src={org.ProfilePic} alt="Card image cap" />
                            <CardBody>
                                <CardImg className="feat-pic" src={org.Logo}/>
                                <CardTitle>{org.Name}</CardTitle>
                                <CardText>{`Based in ${org.Country}`}</CardText>
                            </CardBody>
                        </Card>)) : "Loading..."
                }

            </CardDeck>
            <a href="organizations.html" className="text-link see-all">see all available ORGANIZATIONS</a>
        </div>
    );
}
