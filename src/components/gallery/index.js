import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./gallery.scss";

const Gallery = ({ imageArray, props }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Container className="gallery">
            <Row className="gallery__thumbnails">
                {imageArray.map((image, index) => (
                    <Col>
                        <img
                            key={index}
                            className="thumb"
                            src={image.cloudlink}
                            onClick={() => setCurrentSlide(index)}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                <img className="activeImage" src={imageArray[currentSlide].cloudlink} />
            </Row>
        </Container>
    );
};

export default Gallery;
