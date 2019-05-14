import React from "react";
import { Container, Row, Col } from "reactstrap";
import Gallery from "../../gallery";

const ProjectMain = ({ images }) => (
    <Col md="9" className="project__main">
        <Container fluid>
            <Row className="justify-content-center">
                <h1 className="green-tittle">Project Title</h1>

                <h5 className="general-paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?
                </h5>
            </Row>
            <Row className="listing-subtittle page mt-3">Visual References</Row>
            <Row className="justify-content-center">
                <Gallery imageArray={images} />
            </Row>
            mainbar
        </Container>
    </Col>
);

export default ProjectMain;
