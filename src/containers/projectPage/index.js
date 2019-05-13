import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Table, ButtonGroup, Button } from "reactstrap";
import "./projectPage.scss";

/**
 * This container component holds and handle information about project
 * @extends Component
 */
const images = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 271,
        thumbnailHeight: 320,
        caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "201H (gratisography.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Man on BMX (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 257,
        thumbnailHeight: 320,
        caption: "A photo by 贝莉儿 NG. (unsplash.com)"
    }
];

const ProjectPage = props => {
    const [state, setState] = useState("");

    /*
    useEffect(
        () => {
            if (notification) setTimeout(() => props.history.push("/"), 5000);
        },
        [notification]
    );
    */
    return (
        <Container className="project" fluid>
            <Row className="justify-content-between">
                <Col md="3" className="project__sidebar justify-content-center">
                    <img className="profile-picture" src="images/org-logo.png" />
                    <ButtonGroup className="w-100" vertical>
                        <Button className="mb-2" color="success" outline>
                            Apply
                        </Button>
                        <Button className="mb-2 success" outline>
                            Help this cause
                        </Button>
                    </ButtonGroup>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th scope="row">Application Deadline</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Type</th>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <th scope="row">Starting Date</th>
                                <td>Larry</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="9" className="project__main">
                    <Container fluid>
                        <Row className="justify-content-center">
                            <h1 className="green-tittle">Project Title</h1>
                            <h5 className="general-paragraph">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </h5>
                        </Row>
                        <Row className="justify-content-center">
                            {images.map(i => (
                                <img height="240" width="320" src={i.src} />
                            ))}
                        </Row>
                        mainbar
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    authId: state.auth.user.userId,
    clAPIKey: state.auth.user.CL_apikey,
    clAPISecret: state.auth.user.CL_apisecret
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectPage)
);
